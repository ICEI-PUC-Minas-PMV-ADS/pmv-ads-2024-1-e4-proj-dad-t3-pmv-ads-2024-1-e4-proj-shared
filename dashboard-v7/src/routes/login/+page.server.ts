import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async({ request, cookies, locals }) => {
        const data = await request.formData();
        const login = data.get('email')?.toString()?? ""
        const senha = data.get('password')?.toString()?? ""
        const api_url = import.meta.env.VITE_API_BASE_URL

        console.log(`${api_url}/Auth/entrar`)

        if (!login) {
			return fail(400, { login, missing: true });
		}

        if (!senha) {
			return fail(400, { senha, missing: true });
		}
        
            const response = await fetch(`${api_url}/Auth/entrar`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Email: login, Password: senha }),
            }
            
        ) 
        console.log(response)
        if(response.ok){ 
            console.log(response)
            const responseData = await response.json();
            const token = responseData.token;
            const userId = responseData.id;
            const isCondominio = responseData.isCondominio;
            cookies.set('token', token, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 1.9
            })

            locals.user = {
                id: userId,
                isCondominio: isCondominio
            };
            throw redirect(302, '/acesso/reservas');
        } else {
            console.log("falhou")
            try {
                const errorResponse = await response.json();
                return fail(422, { errors: errorResponse });
              } catch (error) {
                // If the error response is not a valid JSON, fall back to a generic error message
                return fail(422, { errors: { message: 'Invalid credentials.' } });
              }
    }
    }
}

  


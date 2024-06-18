import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async({ request, cookies, locals }) => {
        const data = await request.formData();
        const nome = data.get('email')?.toString()?? ""
        const email = data.get('email')?.toString()?? ""
        const senha = data.get('password')?.toString()?? ""
        const confirmarSenha = data.get('confirm_password')?.toString()?? ""
        const cpf = data.get('cpf')?.toString()?? ""
        const cnpj = data.get('cnpj')?.toString()?? ""
        const api_url = import.meta.env.VITE_API_BASE_URL

        console.log("entrei na action")

        if(cpf != "" && cnpj != ""){
            return fail(400);
        }

        if(senha != confirmarSenha){
            return fail(400);
        }

        if(cpf != ""){
            const isCondominio = false;
        } else {
            const isCondominio = true;
        }
        
            const response = await fetch(`${api_url}/Auth/registro`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: nome, email: email, password: senha, cpf: cpf, cnpj: cnpj })
            }
        ) 
        if(response.ok){ 
            console.log(response)
            const responseData = await response.json();
            const token = responseData.token;
            console.log(token)
            const userId = responseData.id;
            console.log(userId)
            const isCondominio = responseData.isCondominio;
            console.log(isCondominio)
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
            return fail(422, { errors: await response.json() }), {fail: true};
    }
    }
}

  


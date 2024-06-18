import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    return new Response();
};

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies, locals }) {
    // Delete the session cookie
    cookies.delete('token', { path: '/' });
    // locals.user = null;

    // Redirect to the home page or login page after logout
    return new Response(null, {
        status: 303,
        headers: {
            location: '/'
        }
    });
}
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    console.log("entrei na action do layout")
    const api_url = import.meta.env.VITE_API_BASE_URL
    const url = `${api_url}/auth/me`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const token = "Bearer " + cookies.get("token");
    if (token) {
        headers.append('Authorization', token);
        // console.log(headers)
    }
    console.log(url)
    const res: Response = await fetch(url ,{
        method: "GET",
        headers
    });
    // const response = await fetch(url);
    if(res.ok){
        const userData = await res.json();
        console.log(userData)
        return { userData: userData }
    }
}) satisfies LayoutServerLoad;

  import { redirect } from "@sveltejs/kit";
  import jwt, { type JwtPayload } from 'jsonwebtoken';


  interface AuthToken extends JwtPayload {
      authedUser: {
        login: string;
        token: string;
      };
    }
  
  export function VerifyToken(authToken: string){
        const decoded = jwt.verify(authToken, import.meta.env.VITE_SECRET_INGREDIENT) as AuthToken;
  
        if(decoded.authedUser && decoded.token) return decoded
        else return false
      }

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  // -- define the routes of we want to be possible to access without auth
  const unprotectedRoutes = [
    '/login',
  ];

  // -- verify if requested path is public
  function isPathAllowed(path: string) {
      return unprotectedRoutes.some(allowedPath =>
        path === allowedPath || path.startsWith(allowedPath + '/')
      );
    }

    export const handle = async ({event, resolve}) => {
      
      const sessionToken = event.cookies.get('token')

      if(isPathAllowed(event.url.pathname)) {
        if(sessionToken){
          throw redirect(302, '/acesso/dashboard')
        } else {
          const response = await resolve(event)
          return response
        }
      }

      if(!isPathAllowed(event.url.pathname)){

        if(!sessionToken) throw redirect(303, '/login')

        // const decoded = VerifyToken(sessionToken);
  
        // if((!decoded.authedUser || !decoded.token) && !isPathAllowed(event.url.pathname)){
        //   throw redirect(303, '/login')
        // }
      }

      // event.locals =

      const response = await resolve(event)
      return response
    }
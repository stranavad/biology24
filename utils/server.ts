import jwt, {JwtPayload} from 'jsonwebtoken';
import type {H3Event} from "h3";
export async function getUserFromEventToken(event: H3Event<Request>): Promise<{id: string} | null>{
  const {supabaseJwtSecret} = useRuntimeConfig();
  const token = await getCookie(event, 'sb-access-token');

  if(!token){
    return null;
  }

  const data = jwt.verify(token, supabaseJwtSecret) as JwtPayload;
  return {id: data.sub as string};
}

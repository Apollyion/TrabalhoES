import axios, { HeadersDefaults } from "axios";
import { parseCookies } from "nookies";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}


export function getAPIClient(ctx?: any) {
  const { "deliveryman.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if(token) {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`
    } as CommonHeaderProperties
  }

  return api;
}

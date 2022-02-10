import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context);
    const token = cookies['deliveryman.token'];

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    }

    return await fn(context);
  }
}
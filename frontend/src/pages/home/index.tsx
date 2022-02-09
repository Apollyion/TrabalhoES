import { GetServerSideProps } from "next"
import Head from "next/head"
import { ContentHome } from "../../contents/home"
import { withSSRAuth } from "../../utils/withSSRAuth"

export default function Home() {
  return(
    <>
      <Head>
        <title>Home | deliveryman</title>
        <ContentHome />
      </Head>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {
    }
  }
})
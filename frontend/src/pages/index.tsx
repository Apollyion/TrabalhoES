import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Delivery Man</title>
      </Head>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    }
  }
}

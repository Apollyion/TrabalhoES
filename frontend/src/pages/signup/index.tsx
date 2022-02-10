import { GetServerSideProps } from 'next';
import React from 'react';
import { SignUp } from '../../contents/signup';
import { withSSRGuest } from '../../utils/withSSRGuest';
import Head from 'next/head'

const signup = () => {
  return (
    <>
      <Head>
        <title>Cadastro | deliveryman</title>
      </Head>
      <SignUp />
    </>
  )
}

export default signup;

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (context) => {
  return {
    props: {
    }
  }
})
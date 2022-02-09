import { GetServerSideProps } from 'next';
import React from 'react';
import { Login } from '../../contents/login';
import { withSSRGuest } from '../../utils/withSSRGuest';

const login = () => {
  return <Login />
}

export default login;

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (context) => {
  return {
    props: {
    }
  }
})
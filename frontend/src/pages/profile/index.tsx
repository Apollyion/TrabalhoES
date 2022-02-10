import { GetServerSideProps } from 'next';
import React from 'react';
import { NavBar } from '../../components/NavBar';
import { withSSRAuth } from '../../utils/withSSRAuth';

const profile = () => {
  return (
    <div>
      <h2 style={{marginLeft: '8rem'}} >Profile</h2>
      <NavBar />
    </div>
  )
}

export default profile;

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {
    }
  }
})
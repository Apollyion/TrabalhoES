import { GetServerSideProps } from 'next';
import React from 'react';
import { NavBar } from '../../components/NavBar';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { Container } from './styles';

const profile = () => {
  return (
    <Container>
      <h2>Profile</h2>
      <NavBar />
    </Container>
  )
}

export default profile;

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {
    }
  }
})
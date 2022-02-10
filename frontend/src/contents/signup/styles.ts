import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 40%;
  padding: 1rem;
  background: #F8F7FC;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 2rem;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 45rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2.2rem;

    input {
      width: 100%;
      ::placeholder {
      }
    }
  }

  .selectAccount {
    width: 100%;
    display: flex;

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: 1.2rem;
      input {
        width: 15%;
      }
    }
  }

  .adress {
    margin-top: 2rem;
    h2 {
      margin-bottom: 2rem;
    }
  }
`;
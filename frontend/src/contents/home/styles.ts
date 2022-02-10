import styled from "styled-components";

export const Container = styled.div``;

export const DeliveryManHomeContainer = styled.div`
  margin-left: 8rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;
export const Header = styled.div``;

export const ClientHomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 8rem;
  padding: 2rem;
  padding-right: 6rem;

  h1 {
    margin-bottom: 2rem;
  }

  button {
    position: fixed;
    border: none;
    background: transparent;
    right: 15rem;
    bottom: 10rem;
  }
`;
export const DeliveryContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, 38rem);
`;

export const DeliveryItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: #e5e4f1;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 2rem;

    button: {
      border: none;
    }
  }
`;
export const Section = styled.section`
  width: 100%;
  font-size: 1.5rem;
`;

export const ContainerAdreses = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;

  span {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 45rem;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  margin-top: 2rem;
  gap: 2.5rem;

  h2 {
    margin-top: 2rem;
  }
`;

export const Top = styled.div`
  margin-bottom: 3rem;

  span {
    display: flex;
    flex-direction: row;
    div + div {
      margin-left: 2rem;
    }
  }
`;

import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #BBB8D9;
  box-shadow: 0px 2px 16px rgba(48, 46, 69, 0.15);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  z-index: 10;

  button {
    background: transparent;
    border: 0;
    padding-bottom: 1rem;
  }

  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2.6rem;

  @media (max-width: 620px) {
    display: none;
    visibility: hidden;
  }
`;
import styled, { css } from 'styled-components';
import { shade } from 'polished'
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export const Main = styled.main`
  display: flex;
  height: 100vh;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 55%;
  padding: 0 2rem;
  background: #F8F7FC;

  @media(max-width: 920px) {
    width: 100%;
  }

  img {
    margin-bottom: 8rem;
  }

  .titleLogin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 45rem;
    margin-bottom: 2rem;

    h1 {
      font-weight: 700;
      font-size: 2.4rem;
    }

    >p {
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 45rem;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  

  .backgroundForm {
    width: 100%;
    max-width: 45rem;
    border-radius: 8px;
    padding: 3.2rem;
    background: #FFF;

    >p {
      font-weight: 400;
      font-size: 1.2rem;
    }
  }

  .signup {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1.2rem;
    a {
      margin-left: 0.5rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5rem;

    /* >p {
  mary};
      font-size: 1.2rem;
    } */

    input {
      width: 100%;

      ::placeholder {
      }
    }
  }

  .forgotPassword {
    align-self: flex-end;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

export const ContentRight = styled.div`
  height: 100vh;
  width: 45%;
  position: relative;

  @media(max-width: 920px) {
    display: none;
  }
`;

export const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BackgroundTransparent = styled.div`
  width: 100%;
  height: 100%;
  mix-blend-mode: color;
  position: absolute;
  top: 0;
  left: 0;
`;

export const InputStyle = css`
  margin-top: 1.2rem;
`;

export const ButtonStyle = css`
  min-width: 14.5rem;
  padding: 10px 40px;
  border-radius: 3rem;
  border: none;
  margin-top: 2rem;
  font: 400 1rem "Inter", sans-serif;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.35); 
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.35);

  transition: background-color 0.5s;
  &:hover {
  }
`;

const CSSIcon = css`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const AiFillEyeInvisibleIcon = styled(AiFillEyeInvisible)`${CSSIcon}`;

export const AiFillEyeVisibleIcon = styled(AiOutlineEye)`${CSSIcon}`;
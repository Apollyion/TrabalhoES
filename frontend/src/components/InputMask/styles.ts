import styled, { css, CSSProp } from 'styled-components';

import InputMask from 'react-input-mask';

interface ContainerProps {
  styleContainer?: CSSProp;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  ${props => props.styleContainer};

  p{
    font-size: 1rem;
    color: #FF408C;
    margin-left: 0.6rem;
    margin-top: 0.3rem;
    margin-bottom: 0;
  }
`;

export const InLineInput = styled.div`
  display: flex;
  flex-direction: row;
`;

interface InputProps {
  styleInput?: CSSProp;
  error: boolean;
  disabled?: boolean;
}

export const Input = styled(InputMask) <InputProps>`
  background: transparent;
  border: none;
  border-bottom: 2px solid #BBB8D9;
  padding: 0.6rem 0;
  padding: 1.0rem 0;
  padding-bottom: 1.4rem;
  width: 100%;
  outline: 0;
  transition: all 0.4s;

  &:focus {
    border-bottom-color: #00AFFE;
  }

  ${props => props.styleInput};
  border-bottom: ${props => !!props.error && css`2px solid #FF408C`};
  opacity: ${props => props.disabled ? '0.6' : ''};
  cursor: ${props => props.disabled ? 'not-allowed' : ''};
`;

interface TitleProps {
  disabled?: boolean;
}

export const Title = styled.h6<TitleProps>`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  position: absolute;
  top: 1.4rem;
  background: transparent;
  transition: 0.2s ease all;
  pointer-events: none;
  opacity: ${props => props.disabled ? '0.6' : ''};
  cursor: ${props => props.disabled ? 'not-allowed' : ''};

  ${Input}:focus ~ & {
    top: -1.0rem;
  }

  ${Input}.active ~ & {
    top: -1.0rem;
  }
`;
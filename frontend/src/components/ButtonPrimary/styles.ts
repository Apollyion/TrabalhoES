import styled, { CSSProp, css } from 'styled-components';

type ButtonStyleProp = {
  styleProp: CSSProp;
  disabled: boolean;
  width: string;
}

export const Container = styled.button<ButtonStyleProp>`
  width: ${props => props.width ? css`${props.width}` : css`auto`};
  padding: 1rem 4rem;
  border-radius: 7rem;
  height: 3.6rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
  ${props => props.styleProp};
  opacity: ${props => !!props.disabled && 0.6};
  pointer-events: ${props => !!props.disabled && 'none'};
  background: #00AFFE;
  color: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
`;

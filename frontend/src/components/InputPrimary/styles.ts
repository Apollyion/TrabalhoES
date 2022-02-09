import { shade } from 'polished';
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import styled, { css, CSSProp } from 'styled-components';

interface ContainerProps {
  styleContainer?: CSSProp;
}

interface InputProps {
  styleInput?: CSSProp;
  error: boolean;
  disabledStyle: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  height: 4.5rem;

  ${props => props.styleContainer};
  p{
    color: #FF408C;
    margin-bottom: 0;
  }
`;

export const InLineInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.input<InputProps>`
  background: transparent;
  border: none;
  border-bottom: 2px solid #BBB8D9;
  padding: 0.9rem 0;
  padding-bottom: 1.4rem;
  width: 100%;
  outline: 0;
  transition: all 0.4s;

  &:focus {
    ${({ disabledStyle }) => !disabledStyle && css`border-bottom-color: #00AFFE`};
  }
  
  ${props => props.styleInput};
  border-bottom: ${props => !!props.error && css`2px solid  #FF408C !important;`};
  
  opacity: ${({ disabled, disabledStyle }) => disabled || disabledStyle ? '0.6' : ''};
  /* cursor: ${({ disabled, disabledStyle }) => disabled || disabledStyle ? 'not-allowed' : ''}; */
`;

interface TitleProps {
  disabled?: boolean;
  disabledStyle?: boolean;
}

export const Title = styled.h6<TitleProps>`
  position: absolute;
  top: 1.4rem;
  background: transparent;
  margin-bottom: 0.5rem;
  pointer-events: none;
  transition: 0.2s ease all;
  opacity: ${({ disabled, disabledStyle }) => disabled || disabledStyle ? '0.6' : ''};
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;

  small {
    font-size: 1.1rem;
    margin-left: 1rem;
    opacity: 0.7;
  }

  ${Input}:focus ~ & {
    top: -1rem;
  }

  ${Input}.active ~ & {
    top: -1.0rem;
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
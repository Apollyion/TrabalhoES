import
React,
{
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  ReactElement,
  useState,
  useEffect,
  ChangeEvent
} from 'react';

import { FieldError } from 'react-hook-form';
import { CSSProp } from 'styled-components';
import SkeletonInput from '../Skeleton/sckletonInput';
import { Container, InLineInput, Input, Title, AiFillEyeInvisibleIcon, AiFillEyeVisibleIcon } from './styles';

interface InputPrimaryProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  titleInput?: string;
  subTitle?: string;
  classNameContainer?: string;
  styleInput?: CSSProp;
  styleContainer?: CSSProp;
  error?: FieldError | { message: string };
  leftComponent?: ReactElement;
  rightComponent?: ReactElement;
  hideTextError?: boolean;
  disabledStyle?: boolean;
  isActiveInputProp?: boolean;
}

const InputPrimaryBase: ForwardRefRenderFunction<HTMLInputElement, InputPrimaryProps> = (
  {
    titleInput,
    subTitle,
    styleContainer,
    styleInput,
    isLoading,
    error,
    classNameContainer,
    leftComponent,
    rightComponent,
    required,
    hideTextError = false,
    disabledStyle = false,
    isActiveInputProp = false,
    ...rest
  },
  ref
) => {
  const { type, onChange } = { ...rest };
  const [isActiveInput, setIsActiveInput] = useState(false || isActiveInputProp);
  const [typeInputPassword, setTypeInputPassword] = useState(() => {
    if (type === 'password') {
      return 'password';
    }

    return '';
  });

  function checkIsActiveInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (value !== '') {
      setIsActiveInput(true);
    } else {
      setIsActiveInput(false);
    }
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    checkIsActiveInput(event);

    if (onChange) {
      onChange(event);
    }
  }

  useEffect(() => {
    // to check if the input is starting with a default value
    function checkInitValueInput() {
      const { value, defaultValue } = { ...rest };

      if (value || defaultValue) {
        setIsActiveInput(true);
      };
    }

    checkInitValueInput();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [{ ...rest }]);

  return (
    <Container
      styleContainer={styleContainer}
      className={classNameContainer}
    >
      {
        <InLineInput>
          {leftComponent}

          {
            isLoading ?
              <SkeletonInput />
              :
              <>
                <Input
                  disabledStyle={disabledStyle}
                  className={isActiveInput ? 'active' : ''}
                  ref={ref}
                  error={!!error?.message}
                  styleInput={styleInput}
                  onFocus={checkIsActiveInput}
                  {...rest}
                  onChange={handleOnChange}
                  type={type === 'password' ? typeInputPassword : type}
                />

                {
                  !!titleInput &&
                  (
                    <Title disabledStyle={disabledStyle}>
                      {required && '* '}
                      {titleInput} {!!subTitle && <small>{subTitle}</small>}
                    </Title>
                  )
                }
              </>
          }

          {rightComponent}

          {
            typeInputPassword === 'password' && (
              <AiFillEyeInvisibleIcon
                onClick={() => setTypeInputPassword('text')}
                color='#BBB8D9'
              />
            )
          }

          {
            typeInputPassword === 'text' && (
              <AiFillEyeVisibleIcon
                onClick={() => setTypeInputPassword('password')}
              />
            )
          }
        </InLineInput>
      }

      {!!error?.message && !hideTextError && <p>{error.message}</p>}
    </Container>
  )
}

export const InputPrimary = forwardRef(InputPrimaryBase)
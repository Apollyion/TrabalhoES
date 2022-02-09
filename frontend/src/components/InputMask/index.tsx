import React, { forwardRef, ForwardRefRenderFunction, ReactElement, useEffect, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { CSSProp } from 'styled-components';
import { Props as PropsInputMask, ReactInputMask } from 'react-input-mask';

import { Container, InLineInput, Input, Title, } from './styles';
interface InputMaskProps extends PropsInputMask {
  isLoading?: boolean;
  titleInput?: string;
  styleInput?: CSSProp;
  styleContainer?: CSSProp;
  error?: FieldError,
  leftComponent?: ReactElement,
  rightComponent?: ReactElement,
  handleOnChange?: (value: string) => void;
}

const InputMaskBase: ForwardRefRenderFunction<ReactInputMask, InputMaskProps> = (
  {
    titleInput,
    styleContainer,
    styleInput,
    error,
    isLoading,
    leftComponent,
    rightComponent,
    handleOnChange,
    disabled,
    required,
    ...rest
  },
  ref
) => {
  const [isActiveInput, setIsActiveInput] = useState(false);

  function checkIsActiveInput(event: any) {
    // const { value, defaultValue } = { ...rest };
    const value = event.target.value;
    const valueFormated = String(value).replace('-', '');

    // if (value || defaultValue) {
    //   setIsActiveInput(true);
    // }

    if (valueFormated !== '') {
      setIsActiveInput(true);
    } else {
      setIsActiveInput(false);
    }
  }

  function isOnChangeInputMask(event: any) {
    checkIsActiveInput(event);

    if (handleOnChange) {
      handleOnChange(event.target.value);
    }
  }

  useEffect(() => {
    // to check if the input is starting with a default value
    function checkInitValueInput() {
      const { value, defaultValue } = { ...rest };

      if (value || defaultValue) {
        setIsActiveInput(true);
      }
    }

    checkInitValueInput();
  }, [{ ...rest }]);

  return (
    <Container styleContainer={styleContainer}>
      {
        <InLineInput>
          {leftComponent}
              <Input
                className={isActiveInput ? 'active' : ''}
                styleInput={styleInput}
                ref={ref}
                error={!!error?.message}
                onFocus={checkIsActiveInput}
                disabled={disabled}
                onChange={isOnChangeInputMask}
                {...rest}
              />

              {!!titleInput && 
                <Title disabled={disabled}>
                  {required && '* '}
                  {titleInput}
                </Title>
              }

          {rightComponent}
        </InLineInput>
      }

      {!!error && <p>{error.message}</p>}
    </Container>
  )
}

export const InputMask = forwardRef(InputMaskBase)
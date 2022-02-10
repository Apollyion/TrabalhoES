import React, { ButtonHTMLAttributes, ReactElement } from "react";
import { CSSProp } from "styled-components";
import SpinnerLoader, { SpinnerLoaderProps } from "../Loaders/SpinerLoader";
import { Container } from "./styles";

interface ButtonPrimaryProp
  extends SpinnerLoaderProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  leftElement?: ReactElement;
  rightElement?: ReactElement;
  textButton: string;
  styleProp?: CSSProp;
  category?: "Primary" | "Outline";
  disabled: boolean;
  width: string;
}

const ButtonPrimary = ({
  category = "Primary",
  leftElement,
  rightElement,
  textButton,
  loading,
  styleProp,
  colorSpinner,
  sizeSpinner,
  disabled = false,
  width,
  ...rest
}: ButtonPrimaryProp) => {
  // const Button = Styles[category]

  return (
    <Container styleProp={styleProp as CSSProp} width={width} disabled={false}>
      {loading ? (
        <SpinnerLoader loading={loading} />
      ) : (
        <>
          {leftElement}
          {textButton}
          {rightElement}
        </>
      )}
    </Container>
  );
};

export default ButtonPrimary;

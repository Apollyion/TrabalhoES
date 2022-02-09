import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Main,
  ContentLeft,
  ContentRight,
  ImageContainer,
  ButtonStyle,
  Form,
  BackgroundTransparent,
  AiFillEyeInvisibleIcon,
  AiFillEyeVisibleIcon,
  InputStyle,
} from "./styles";
import { toast } from "react-toastify";
import ButtonPrimary from "../../components/ButtonPrimary";
import { InputPrimary } from "../../components/InputPrimary";
import { useAuth } from "../../contexts/AuthContext";

interface FormLogin {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Digite seu email").email("Email inválido"),
  password: yup.string().required("Digite sua senha"),
});

export function Login() {
  const [typeInputPassword, setTypeInputPassword] = useState("password");
  const { register, handleSubmit, formState, clearErrors } = useForm<FormLogin>({
    resolver: yupResolver(signInFormSchema),
  });

  const { signIn } = useAuth();

  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn(data);
    } catch (error) {
      toast.error("Email ou senha podem estar incorretos!")
    }
  })

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Main>
        <ContentLeft>
          <div className="titleLogin">
            <h1>Login</h1>
          </div>

          <Form onSubmit={onSubmit}>
            <div className="backgroundForm">
              <InputPrimary
                titleInput="Email"
                type="email"
                // name="email"
                {...register("email")}
                error={errors.email}
                onClick={() => clearErrors("email")}
              />

              <InputPrimary
                titleInput="Senha"
                type={typeInputPassword}
                // name="password"
                {...register("password")}
                error={errors.password}
                onClick={() => clearErrors("password")}
                rightComponent={
                  typeInputPassword === "password" ? (
                    <AiFillEyeInvisibleIcon
                      onClick={() => setTypeInputPassword("text")}
                    />
                  ) : (
                    <AiFillEyeVisibleIcon
                      onClick={() => setTypeInputPassword("password")}
                    />
                  )
                }
                styleContainer={InputStyle}
              />
            </div>

            <div className="signup">
              <p>Ainda não possui cadastro?</p>
              <Link href="/signup" passHref>
                Cadastre-se
              </Link>
            </div>

            <ButtonPrimary
              textButton="ENTRAR"
              styleProp={ButtonStyle}
              loading={isSubmitting}
              width={"14.5rem"}
              type="submit"
              disabled={false}
            />
          </Form>
        </ContentLeft>

        <ContentRight>
          <BackgroundTransparent />
          <ImageContainer src="/assets/background.jpeg" alt="Patriani" />
        </ContentRight>
      </Main>
    </>
  );
}

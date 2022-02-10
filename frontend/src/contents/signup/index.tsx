import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputPrimary } from "../../components/InputPrimary";
import { Container, Content, Form } from "./styles";
import * as yup from "yup";
import { useState } from "react";
import { InputMask } from "../../components/InputMask";
import ButtonPrimary from "../../components/ButtonPrimary";
import { ButtonStyle } from "../login/styles";
import { toast } from "react-toastify";
import { signUpRequest } from "../../services/auth";
import Router from "next/router";

export interface IAdress {
  id?: string;
  street: string;
  district: string;
  number: number;
  city: string;
  state: string;
}

interface FormSignUp {
  type: "CLIENT" | "DELIVERYMAN";
  description: string;
  full_name: string;
  document: string;
  email: string;
  password: string;
  adresses?: IAdress;
}

const signUpFormSchema = yup.object().shape({
  full_name: yup.string().required("O nome é obrigatório!"),
  email: yup.string().email("Digite um email valido!").required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatório"),
  description: yup.string(),
  document: yup.string().required("O documento é obrigatório!"),
  adresses: yup.object().shape({
    street: yup.string().required("O nome da rua é obrigatório"),
    district: yup.string().required("O bairro é obrigatório"),
    number: yup.string().required("O numero é obrigatório"),
    city: yup.string().required("A cidade é obrigatório"),
    state: yup.string().required("O estado é obrigatório"),
  }),
});

export function SignUp() {
  const { register, handleSubmit, formState, clearErrors } =
    useForm<FormSignUp>({
      resolver: yupResolver(signUpFormSchema),
    });
  const [accountSelected, setAccountSelected] = useState<
    "CLIENT" | "DELIVERYMAN"
  >("CLIENT");

  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try{
      const adresses = [data.adresses]
      delete data.adresses
      const user = {...data, type: accountSelected}
      
      const formData = {
        user,
        adresses
      }

      await signUpRequest(formData)

      toast.success("Cadastro realizado com sucesso. Já pode fazer login com seu email e senha!")
      Router.push("/login")
    }catch(error) {
      toast.error("Falha no cadastro, tente novamente!")
    }
  })

  return (
    <Container>
      <Content>
        <h1>Cadastro</h1>
        <Form onSubmit={onSubmit}>
          <span className="selectAccount">
            <div>
              <input
                id="check"
                type="checkbox"
                onChange={() => setAccountSelected("CLIENT")}
                checked={accountSelected === "CLIENT"}
                style={{cursor: 'pointer'}}
              />
              <label style={{cursor: 'pointer'}} htmlFor="check">Quero ser um cliente</label>
            </div>

            <div style={{cursor: 'pointer'}}>
              <input
                id="check-two"
                type="checkbox"
                onChange={() => setAccountSelected("DELIVERYMAN")}
                checked={accountSelected === "DELIVERYMAN"}
                style={{cursor: 'pointer'}}
              />
              <label style={{cursor: 'pointer'}} htmlFor="check-two">Quero ser um entregador</label>
            </div>
          </span>

          <InputPrimary
            titleInput="Nome completo"
            {...register("full_name")}
            error={errors.full_name}
            onClick={() => clearErrors("full_name")}
          />

          <InputPrimary
            titleInput="email"
            type="email"
            {...register("email")}
            error={errors.email}
            onClick={() => clearErrors("email")}
          />

          <InputPrimary
            titleInput="Senha"
            type="password"
            {...register("password")}
            error={errors.password}
            onClick={() => clearErrors("password")}
          />

          <InputPrimary
            titleInput="Descrição"
            {...register("description")}
            error={errors.description}
            onClick={() => clearErrors("description")}
          />

          <InputMask
            titleInput={accountSelected === "CLIENT" ? "cnpj" : "cpf"}
            mask={
              accountSelected === "CLIENT"
                ? "99.999.999/9999-99"
                : "999.999.99-99"
            }
            {...register("document")}
            error={errors.document}
          />

          <div className="adress">
            <h2>Endereço</h2>
            <InputPrimary
              titleInput="Rua"
              {...register("adresses.street")}
              error={errors.adresses?.street}
              onClick={() => clearErrors("adresses.street")}
            />

            <InputPrimary
              titleInput="Bairro"
              {...register("adresses.district")}
              error={errors.adresses?.district}
              onClick={() => clearErrors("adresses.district")}
            />

            <InputPrimary
              titleInput="Número"
              {...register("adresses.number")}
              error={errors.adresses?.number}
              onClick={() => clearErrors("adresses.number")}
            />

            <InputPrimary
              titleInput="Cidade"
              {...register("adresses.city")}
              error={errors.adresses?.city}
              onClick={() => clearErrors("adresses.city")}
            />

            <InputPrimary
              titleInput="Estado"
              {...register("adresses.state")}
              error={errors.adresses?.state}
              onClick={() => clearErrors("adresses.state")}
            />
          </div>

          <ButtonPrimary
            textButton="ENVIAR"
            styleProp={ButtonStyle}
            loading={isSubmitting}
            width={"14.5rem"}
            type="submit"
            disabled={false}
          />
        </Form>
      </Content>
    </Container>
  );
}

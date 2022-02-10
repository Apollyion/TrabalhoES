import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Container, DeliveryManHomeContainer, Header } from "./styles";

export function ContentHome() {
  function ClientHome() {

    return (
      <h3>Client Home</h3>
    )
  }

  function DeliveryManHome () {
    return(
      <DeliveryManHomeContainer>
        <Header>
          <p>Todas as entregas disponiveis</p>
          <p>Minhas entregas</p>
          <p>Meus dados</p>
        </Header>

        <h2>Home do deliveryman</h2>
      </DeliveryManHomeContainer>
    )
  }

  const { user } = useAuth()

  return(
    <Container>
      {user?.type === "CLIENT" && <ClientHome />}
      {user?.type === "DELIVERYMAN" && <DeliveryManHome />}
    </Container>
  )
}
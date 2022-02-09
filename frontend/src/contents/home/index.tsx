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
          <p>Entregas diponiveis</p>
          <p>Minhas entregas</p>
          <p>Meus dados</p>
        </Header>
      </DeliveryManHomeContainer>
    )
  }

  const { user } = useAuth()


  return(
    <Container>
      {user?.type === "CLIENT" ? (
        <ClientHome />
      ): (
        <DeliveryManHome />
      )}
    </Container>
  )
}
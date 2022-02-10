import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NavBar } from "../../components/NavBar";
import { useAuth } from "../../contexts/AuthContext";
import {
  associateDeliveryService,
  creatDelivery,
  getDeliveries,
  updateStatusDelivery,
} from "../../services/deliveries";
import Modal from "react-modal";

import {
  ClientHomeContainer,
  Container,
  ContainerAdreses,
  DeliveryContainer,
  DeliveryItem,
  DeliveryManHomeContainer,
  Form,
  Header,
  Section,
  Top,
} from "./styles";
import { IoMdAddCircle } from "react-icons/io";
import { InputPrimary } from "../../components/InputPrimary";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../../components/ButtonPrimary";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
export interface IDeliveriProps {
  id: string;
  item_name: string;
  description: string;
  status: "PENDING" | "IN_PROGRESS" | "DELIVERED";
  street: string;
  district: string;
  number: number;
  city: string;
  state: string;
  complement: string;
}

const status = {
  PENDING: "Pendente",
  IN_PROGRESS: "Em progresso",
  DELIVERED: "Entregue",
};

const customStyles = {
  overlay: {
    background: "rgba(48, 46, 69, 0.35)",
    zIndex: 10,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "48rem",
    maxHeight: "90%",
    padding: "3.2rem",
    borderRadius: "1.6rem",
  },
};

const updateFormSchema = yup.object().shape({
  item_name: yup.string().required("O nome é obrigatório!"),
  description: yup.string(),
  street: yup.string().required("O nome da rua é obrigatório"),
  district: yup.string().required("O bairro é obrigatório"),
  number: yup.number().required("O numero é obrigatório"),
  city: yup.string().required("A cidade é obrigatório"),
  state: yup.string().required("O estado é obrigatório"),
});

export function ContentHome() {
  function ClientHome() {
    const { register, handleSubmit, formState, clearErrors } =
      useForm<IDeliveriProps>({
        resolver: yupResolver(updateFormSchema),
      });

    const { errors, isSubmitting } = formState;

    const [openModal, setOpenModal] = useState(false);
    const [deliveries, setDeliveries] = useState<IDeliveriProps[]>([]);

    console.log("errors ", errors)
    const onSubmit = handleSubmit(async (data) => {
      const formData = {
        ...data,
        created_by: user.id,
      };
      try {
        const response = await creatDelivery(formData);

        const updateDeliveries = [...deliveries];
        updateDeliveries.push(response);
        setDeliveries(updateDeliveries);
        setOpenModal(false);
        toast.success("Entrega adiconado com sucesso!");
      } catch (error) {
        toast.error("Falha, tente novamente!");
      }
    });

    useEffect(() => {
      async function onGetDeliveries() {
        try {
          const response = await getDeliveries({
            type: user.type,
            userId: user.id,
          });

          setDeliveries(response.deliveries);
        } catch (error) {
          toast.error("Falha");
        }
      }

      onGetDeliveries();
    }, [setDeliveries]);

    return (
      <ClientHomeContainer>
        {openModal && (
          <Modal
            onRequestClose={() => setOpenModal(false)}
            isOpen={openModal}
            style={customStyles}
          >
            <Form onSubmit={onSubmit}>
              <h1>Adicionar entrega</h1>
              <InputPrimary
                titleInput="Nome"
                {...register("item_name")}
                error={errors.item_name}
                onClick={() => clearErrors("item_name")}
              />

              <InputPrimary
                titleInput="Descrição"
                {...register("description")}
                error={errors.description}
                onClick={() => clearErrors("description")}
              />

              <h2>Endereço de destino</h2>

              <InputPrimary
                titleInput="Rua"
                {...register("street")}
                error={errors.street}
                onClick={() => clearErrors("street")}
              />

              <InputPrimary
                titleInput="Bairro"
                {...register("district")}
                error={errors.item_name}
                onClick={() => clearErrors("district")}
              />

              <InputPrimary
                titleInput="Numero"
                {...register("number")}
                error={errors.number}
                onClick={() => clearErrors("number")}
              />

              <InputPrimary
                titleInput="Cidade"
                {...register("city")}
                error={errors.city}
                onClick={() => clearErrors("city")}
              />

              <InputPrimary
                titleInput="Estado"
                {...register("state")}
                error={errors.state}
                onClick={() => clearErrors("state")}
              />

              <ButtonPrimary
                textButton="CRIAR"
                loading={isSubmitting}
                width={"14.5rem"}
                type="submit"
                disabled={false}
              />
            </Form>
          </Modal>
        )}
        <h1>Minhas entregas</h1>
        <button onClick={() => setOpenModal(true)}>
          <IoMdAddCircle title="Adicionar entrega" size={80} color="#00AFFE" />
        </button>

        <DeliveryContainer>
          {deliveries &&
            deliveries.map((item) => (
              <DeliveryItem key={item.id}>
                <Section>
                  <p>
                    <strong>Nome:</strong> {item.item_name}
                  </p>
                  <p>
                    <strong>Descrição:</strong> {item.description}
                  </p>
                  <p>
                    <strong>Staus:</strong> {status[item.status]}
                  </p>
                </Section>
                <ContainerAdreses>
                  <span>
                    <h2>Enderço de origem</h2>
                    <p>{user?.adresses[0].street}</p>
                    <p>{user?.adresses[0].district}</p>
                    <p>{user?.adresses[0].number}</p>
                    <p>{user?.adresses[0].city}</p>
                    <p>{user?.adresses[0].state}</p>
                    <p>{user?.adresses[0].complement}</p>
                  </span>

                  <span>
                    <h2>Enderço de destino</h2>
                    <p>{item.street}</p>
                    <p>{item.district}</p>
                    <p>{item.number}</p>
                    <p>{item.city}</p>
                    <p>{item.state}</p>
                    <p>{item.complement}</p>
                  </span>
                </ContainerAdreses>
              </DeliveryItem>
            ))}
        </DeliveryContainer>
      </ClientHomeContainer>
    );
  }

  function DeliveryManHome() {
    const [accountSelected, setAccountSelected] = useState<"All" | "My">("All");
    const [deliveries, setDeliveries] = useState<IDeliveriProps[]>([]);

    async function handleChangeMyDeliveries(selectedOption: "All" | "My") {
      try {
        if (selectedOption === "All") {
          const response = await getDeliveries({ status: "PENDING" });

          setDeliveries(response.deliveries);
          setAccountSelected("All");
        } else {
          const response = await getDeliveries({
            type: user.type,
            userId: user.id,
          });

          setDeliveries(response.deliveries);
          setAccountSelected("My");
        }
      } catch (error) {
        toast.error("Falha, tente novamente!");
      }
    }

    async function associateDelivery(deliveryId: string) {
      try {
        const response = await associateDeliveryService(deliveryId);
        const findIndexDelivery = deliveries.findIndex(
          (item) => item.id === response.id
        );

        if (findIndexDelivery >= 0) {
          const updateDeliveries = [...deliveries];
          updateDeliveries.splice(findIndexDelivery, 1);
          setDeliveries(updateDeliveries);
        }

        toast.success("Entrega foi atrubuida à você");
      } catch (error) {
        toast.error("Falha");
      }
    }

    async function changeStatusDelivery(deliveryId: string, status: string) {
      try {
        const response = await updateStatusDelivery({ deliveryId, status });

        const findIndexDelivery = deliveries.findIndex(
          (item) => item.id === response.id
        );

        if (findIndexDelivery >= 0) {
          const updateDeliveries = [...deliveries];
          updateDeliveries[findIndexDelivery].status = response.status;
          if (status === "PENDING")
            updateDeliveries.splice(findIndexDelivery, 1);
          setDeliveries(updateDeliveries);
        }

        if (status === "PENDING") toast.success("Entrega cancelada! ");
        if (status === "DELIVERED") toast.success("Entrega realizada! ");
      } catch (error) {
        toast.error("Falha");
      }
    }

    useEffect(() => {
      async function onGetDeliveries() {
        try {
          const response = await getDeliveries({ status: "PENDING" });

          setDeliveries(response.deliveries);
        } catch (error) {
          console.log("error ", error);
          // toast.error("Falha");
        }
      }

      onGetDeliveries();
    }, []);

    return (
      <DeliveryManHomeContainer>
        <Top>
          <span className="selectAccount">
            <div>
              <input
                id="check"
                type="checkbox"
                onChange={() => handleChangeMyDeliveries("All")}
                checked={accountSelected === "All"}
                style={{ cursor: "pointer" }}
              />
              <label style={{ cursor: "pointer" }} htmlFor="check">
                Entregas disponiveis
              </label>
            </div>

            <div style={{ cursor: "pointer" }}>
              <input
                id="check-two"
                type="checkbox"
                onChange={() => handleChangeMyDeliveries("My")}
                checked={accountSelected === "My"}
                style={{ cursor: "pointer" }}
              />
              <label style={{ cursor: "pointer" }} htmlFor="check-two">
                Minhas entregas
              </label>
            </div>
          </span>
        </Top>
        <DeliveryContainer>
          {deliveries &&
            deliveries.map((item) => (
              <DeliveryItem key={item.id}>
                <Section>
                  <p>
                    <strong>Nome:</strong> {item.item_name}
                  </p>
                  <p>
                    <strong>Descrição:</strong> {item.description}
                  </p>
                  <p>
                    <strong>Staus:</strong> {status[item.status]}
                  </p>
                </Section>
                <ContainerAdreses>
                  <span>
                    <h2>Enderço de origem</h2>
                    <p>{user?.adresses[0].street}</p>
                    <p>{user?.adresses[0].district}</p>
                    <p>{user?.adresses[0].number}</p>
                    <p>{user?.adresses[0].city}</p>
                    <p>{user?.adresses[0].state}</p>
                    <p>{user?.adresses[0].complement}</p>
                  </span>

                  <span>
                    <h2>Enderço de destino</h2>
                    <p>{item.street}</p>
                    <p>{item.district}</p>
                    <p>{item.number}</p>
                    <p>{item.city}</p>
                    <p>{item.state}</p>
                    <p>{item.complement}</p>
                  </span>
                </ContainerAdreses>

                <div>
                  {accountSelected === "All" ? (
                    <button onClick={() => associateDelivery(item.id)}>
                      Pegar entrega
                    </button>
                  ) : (
                    <>
                      {item.status !== "DELIVERED" && (
                        <>
                          <button
                            onClick={() =>
                              changeStatusDelivery(item.id, "PENDING")
                            }
                          >
                            Cancelar entrega
                          </button>
                          <button
                            onClick={() =>
                              changeStatusDelivery(item.id, "DELIVERED")
                            }
                          >
                            Confirmar entrega
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </DeliveryItem>
            ))}
        </DeliveryContainer>
      </DeliveryManHomeContainer>
    );
  }

  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [deliveries, setDeliveries] = useState<IDeliveriProps[]>([]);

  useEffect(() => {
    if (!!user.email) {
      // onGetDeliveries();
      setLoading(false);
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Container>
          {user?.type === "CLIENT" && <ClientHome />}
          {user?.type === "DELIVERYMAN" && <DeliveryManHome />}
          <NavBar />
        </Container>
      )}
    </>
  );
}

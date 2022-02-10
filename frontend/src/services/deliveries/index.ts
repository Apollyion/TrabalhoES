import { IDeliveriProps } from "../../contents/home";
import { IUser } from "../../contexts/AuthContext";
import { api } from "../api";

interface IGetDeliveriesProps {
  type?: "CLIENT" | "DELIVERYMAN",
  status?: string,
  userId?: string,
}

export async function getDeliveries({ type, status, userId }: IGetDeliveriesProps) {
  const params = {} as any;

  if(type === "CLIENT") params.created_by = userId
  if(type === "DELIVERYMAN") params.delivery_by = userId
  if(status) params.status = status

  try{
    const response = await api.get("/deliveries", {
      params
    })

    return response.data
  }catch(error) {
    console.log("error", error)
    throw 'Falha'
  }
}

export async function creatDelivery(data: IDeliveriProps) {
  try{
    const response = await api.post("/deliveries", data)

    return response.data
  }catch(error) {
    console.log("error", error)
    throw 'Falha'
  }
}

export async function associateDeliveryService(deliveryId: string) {
  try{
    const response = await api.put(`/deliveries/${deliveryId}`)

    return response.data
  }catch(error) {
    console.log("error", error)
    throw 'Falha'
  }
}

export async function updateStatusDelivery({ deliveryId, status }:{deliveryId: string, status: string}) {
  try{
    const body = {
      status
    }
    const response = await api.put(`/deliveries/status/${deliveryId}`, body)

    return response.data
  }catch(error) {
    console.log("error", error)
    throw 'Falha'
  }
}
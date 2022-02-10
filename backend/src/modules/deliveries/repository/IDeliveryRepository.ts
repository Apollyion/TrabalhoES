import { IDelivery } from "../deliverieModel";

export type GetDeliveryProps = {
  search?: string;
  created_by?: string;
  delivery_by?: string;
  offset?: number;
  limit?: number;
  status?: string
}

export interface IDeliveryRepository {
  createDelivery: (body: IDelivery) => Promise<any>
  getDeliveries: ({ search, delivery_by, status, created_by, offset, limit }: GetDeliveryProps) => Promise<any>
  getDeliveryById: (deliveryId: string) => Promise<any>
}
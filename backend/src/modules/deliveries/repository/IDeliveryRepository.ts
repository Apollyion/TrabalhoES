import { IDelivery } from "../deliverieModel";

export type GetDeliveryProps = {
  search?: string;
  created_by?: string;
  delivery_by?: string;
  offset?: number;
  limit?: number;
}

export interface IDeliveryRepository {
  createDelivery: (body: IDelivery) => Promise<any>
  getDeliveries: ({ search, delivery_by, created_by, offset, limit }: GetDeliveryProps) => Promise<any>
  getDeliveryById: (deliveryId: string) => Promise<any>
}
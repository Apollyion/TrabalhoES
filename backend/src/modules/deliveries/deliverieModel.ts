export enum DeliveryStatus{
  PENDING="PENDING",
  IN_PROGRESS="IN_PROGRESS",
  DELIVERED="DELIVERED"
}

export interface IDelivery {
  id?: string;
  item_name: string;
  description?: string;
  street: string
  district: string;
  number: number;
  city: string;
  state: string;
  complement?: string;
  status: DeliveryStatus;
  delivered_by: string;
  created_by: string;
  created_at?: string
  updated_at?: string;
}
export interface IAdress {
  id?: string;
  street: string;
  district: string;
  number: number;
  city: string;
  state: string;
}
export interface IUser {
  id?: string;
  type: "CLIENT" | "DELIVERYMAN";
  description: string;
  full_name: string;
  document: string;
  email: string;
  password?: string;
  adresses: IAdress[];
  createdat?: string;
  updateat?: string;
}
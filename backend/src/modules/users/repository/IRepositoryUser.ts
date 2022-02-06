import { IAdress, IUser } from "../userModel";

export interface ICreateUser {
  user: IUser;
  adresses: IAdress[];
}
export interface IRepositoryUSer {
  createUser: ({user, adresses}: ICreateUser) => Promise<any>;
  findUserByEmail: (email: string) => Promise<IUser>;
  findUserById: (id: string) => Promise<IUser>;
}
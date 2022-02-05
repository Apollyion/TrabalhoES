import { IUser } from "../userModel";

export interface IRepositoryUSer {
  createUser: (body: IUser) => Promise<any>;
  findUserByEmail: (email: string) => Promise<any>
}
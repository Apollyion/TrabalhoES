import AppError from "../../../../errors/AppError";
import { UserRepository } from "../../repository/implemantation";
import { IRepositoryUSer } from "../../repository/IRepositoryUser";
import { IAdress, IUser } from "../../userModel";

interface IRequest {
  user: IUser;
  adresses: IAdress[];
}

export class UpdateUserService{
  constructor(private userRepository: UserRepository) {}
  async execute({ user, adresses }:IRequest) {
    const userExists = await this.userRepository.findUserByEmail(user.email)

    if(!userExists) {
      throw new AppError("Não conseguimos econtrar este usuario")
    }

    const newUser = await this.userRepository.updateUser({
      user, adresses
    })

    return newUser
  }
}
import AppError from "../../../../errors/AppError";
import { IRepositoryUSer } from "../../repository/IRepositoryUser";
import { IAdress, IUser } from "../../userModel";

interface IRequest {
  user: IUser;
  adresses: IAdress[];
}
export class CreateUserService {
  private userRepository: IRepositoryUSer
  constructor(userRepository: IRepositoryUSer) {
    this.userRepository = userRepository
  }

  async execute({ user, adresses }:IRequest) {
    const userAlredyExists = await this.userRepository.findUserByEmail(user.email)

    if(userAlredyExists) {
      throw new AppError('Email já está em uso!')
    }

    const userCreated = await this.userRepository.createUser({
      user,
      adresses
    }) as IUser

    delete userCreated.password

    return userCreated
  }
}
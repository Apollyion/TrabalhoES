import { IRepositoryUSer } from "../../repository/IRepositoryUser";
import { IUser } from "../../userModel";

export class CreateUserService {
  private userRepository: IRepositoryUSer
  constructor(userRepository: IRepositoryUSer) {
    this.userRepository = userRepository
  }
  async execute(body: IUser) {
    const userExists = await this.userRepository.findUserByEmail(body.email)

    if(userExists) {
      console.log("Ja existe");
      return;
    }

    const response = await this.userRepository.createUser(body)

    return response
  }
}
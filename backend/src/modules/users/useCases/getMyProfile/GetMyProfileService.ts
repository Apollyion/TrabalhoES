import { IRepositoryUSer } from "../../repository/IRepositoryUser"

export class GetMyProfileService{
  private userRepository: IRepositoryUSer
  constructor(userRepository: IRepositoryUSer) {
    this.userRepository = userRepository
  }

  async execute(user_id: string) {
    const user = await this.userRepository.findUserById(user_id)

    return user
  }
}
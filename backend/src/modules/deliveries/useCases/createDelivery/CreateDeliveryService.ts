import AppError from "../../../../errors/AppError";
import { IRepositoryUSer } from "../../../users/repository/IRepositoryUser";
import { IDelivery } from "../../deliverieModel";
import { IDeliveryRepository } from "../../repository/IDeliveryRepository";

export class CreateDeliveryService {
  constructor(private deliveryRepository: IDeliveryRepository, private userRepository: IRepositoryUSer) {}

  async execute(body: IDelivery) {
    const user = await this.userRepository.findUserById(body.created_by)

    if(!user) {
      throw new AppError("user not found", 404)
    }
    const delivery = await this.deliveryRepository.createDelivery(body)

    return delivery
  }
}
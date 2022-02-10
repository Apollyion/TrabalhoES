import { IDeliveryRepository } from "../../repository/IDeliveryRepository";

export class GetDeliveryService {
  constructor(private deliveryRepository: IDeliveryRepository){}
  async execute(deliveryId: string) {
    const delivery = await this.deliveryRepository.getDeliveryById(deliveryId)

    return delivery
  }
}
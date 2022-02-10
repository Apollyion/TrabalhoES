import { DeliveryRepository } from "../../repository/implemantation";

export class DeleteDeliveryService{
  constructor(private deliveryRepository: DeliveryRepository) {}
  async execute(deliveryId: string) {
    const deliveryDelteted = await this.deliveryRepository.deleteDelivery(deliveryId)

    return deliveryDelteted
  }
}
import AppError from "../../../../errors/AppError";
import { DeliveryRepository } from "../../repository/implemantation";

interface IRequest {
  deliveryId: string;
  status: string;
}

export class UpdateStatusDeliveryService {
  constructor(private deliveryRepository: DeliveryRepository) {}
  async execute({ deliveryId, status }: IRequest) {
    const delivery = await this.deliveryRepository.getDeliveryById(deliveryId)

    if(!delivery) {
      throw new AppError("Não foi possivel encontrar essa entrega!")
    }

    const newDeliery = await this.deliveryRepository.updateStatusDelivered({
      id: delivery.id,
      status
    })

    return newDeliery
  }
}
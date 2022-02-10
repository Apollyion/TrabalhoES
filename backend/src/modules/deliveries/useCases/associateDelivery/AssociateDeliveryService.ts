import AppError from "../../../../errors/AppError";
import { DeliveryRepository } from "../../repository/implemantation";

interface IRequest {
  deliveryId: string;
  userId: string;
}

export class AssociateDeliveryService {
  constructor(private deliveryRepository: DeliveryRepository) {}
  async execute({ deliveryId, userId }: IRequest) {
    const delivery = await this.deliveryRepository.getDeliveryById(deliveryId)

    if(!delivery) {
      throw new AppError("Não foi possivel encontrar essa entrega!")
    }

    const newDeliery = await this.deliveryRepository.updateDeliveryForAssociante({
      delivered_by: userId,
      id: deliveryId
    })

    return newDeliery
  }
}
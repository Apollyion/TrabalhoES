import { Request, Response } from "express";
import { UserRepository } from "../../../users/repository/implemantation";
import { DeliveryRepository } from "../../repository/implemantation";
import { AssociateDeliveryService } from "./AssociateDeliveryService";

export class AssociateDeliveryController {
  async handle(request: Request, response: Response) {
    const { deliveryId } = request.params
   
    const formData = {
      userId: request.user.id,
      deliveryId
    }
    const deliveryRepository = new DeliveryRepository()
    const service = new AssociateDeliveryService(deliveryRepository)

    const data = await service.execute(formData)

    return response.json(data)
  }
}
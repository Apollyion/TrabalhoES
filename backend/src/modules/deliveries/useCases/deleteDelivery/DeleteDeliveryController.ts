import { Request, Response } from "express";
import { DeliveryRepository } from "../../repository/implemantation";
import { DeleteDeliveryService } from "./DeleteDeliveryService";

export class DeleteDeliveryController {
  async handle(request: Request, response: Response) {
    const { deliveryId } = request.params

    const deliveryRepository = new DeliveryRepository()
    const service = new DeleteDeliveryService(deliveryRepository)

    const delivery = await service.execute(deliveryId)

    return response.json(delivery)
  }
}
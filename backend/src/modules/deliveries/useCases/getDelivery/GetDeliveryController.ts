import { Request, Response } from "express";
import { DeliveryRepository } from "../../repository/implemantation";
import { GetDeliveryService } from "./GetDeliveryService";

export class GetDeliveryController {
  async handle(request: Request, response: Response) {
    const { deliveryId } = request.params

    const deliveryRepository = new DeliveryRepository()
    const service = new GetDeliveryService(deliveryRepository)


    const delivery = await service.execute(deliveryId)

    return response.json(delivery)
  }
}
import { Request, Response } from "express";
import { UserRepository } from "../../../users/repository/implemantation";
import { DeliveryRepository } from "../../repository/implemantation";
import { UpdateStatusDeliveryService } from "./UpdateStatusDeliveryService";

export class UpdateStatusDeliveryController {
  async handle(request: Request, response: Response) {
    const { deliveryId } = request.params
    const { status }  = request.body
   
    const formData = {
      status,
      deliveryId
    }
    const deliveryRepository = new DeliveryRepository()
    const service = new UpdateStatusDeliveryService(deliveryRepository)

    const data = await service.execute(formData)

    return response.json(data)
  }
}
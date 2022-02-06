import { Request, Response } from "express";
import { UserRepository } from "../../../users/repository/implemantation";
import { DeliveryRepository } from "../../repository/implemantation";
import { CreateDeliveryService } from "./CreateDeliveryService";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { body } = request
   
    const deliveryRepository = new DeliveryRepository()
    const userRepository = new UserRepository()
    const service = new CreateDeliveryService(deliveryRepository, userRepository)

    const data = await service.execute(body)

    return response.json(data)
  }
}
import { Request, Response } from "express";
import { DeliveryRepository } from "../../repository/implemantation";
import { GetDeliveriesService } from "./GetDeliveriesService";

export class GetDeliveriesController {
  async handle(request: Request, response: Response) {
    const { query } = request

    const deliveryRepository = new DeliveryRepository()
    const service = new GetDeliveriesService(deliveryRepository)

    const deliveries = await service.execute(query)

    return response.json({
      deliveries
    })
  }
}
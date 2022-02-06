import { IDeliveryRepository } from "../../repository/IDeliveryRepository";

interface IRequest {
  search?: string;
  created_by?: string;
  delivery_by?: string;
  limit?: number;
  offset?: number;
}

export class GetDeliveriesService {
  constructor(private deliveryRepository: IDeliveryRepository) {}
  async execute({ search='', delivery_by='', created_by='', limit=10, offset=0}: IRequest) {
    const deliveries = await this.deliveryRepository.getDeliveries({
      search,
      delivery_by,
      created_by,
      limit,
      offset
    })

    return deliveries
  }
}
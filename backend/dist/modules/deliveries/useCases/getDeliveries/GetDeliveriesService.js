"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDeliveriesService = void 0;

class GetDeliveriesService {
  constructor(deliveryRepository) {
    this.deliveryRepository = deliveryRepository;
  }

  async execute({
    search = '',
    delivery_by = '',
    status = '',
    created_by = '',
    limit = 10,
    offset = 0
  }) {
    const deliveries = await this.deliveryRepository.getDeliveries({
      search,
      delivery_by,
      created_by,
      status,
      limit,
      offset
    });
    return deliveries;
  }

}

exports.GetDeliveriesService = GetDeliveriesService;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDeliveryService = void 0;

class GetDeliveryService {
  constructor(deliveryRepository) {
    this.deliveryRepository = deliveryRepository;
  }

  async execute(deliveryId) {
    const delivery = await this.deliveryRepository.getDeliveryById(deliveryId);
    return delivery;
  }

}

exports.GetDeliveryService = GetDeliveryService;
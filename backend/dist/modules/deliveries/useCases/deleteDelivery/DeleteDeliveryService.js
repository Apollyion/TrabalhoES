"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteDeliveryService = void 0;

class DeleteDeliveryService {
  constructor(deliveryRepository) {
    this.deliveryRepository = deliveryRepository;
  }

  async execute(deliveryId) {
    const deliveryDelteted = await this.deliveryRepository.deleteDelivery(deliveryId);
    return deliveryDelteted;
  }

}

exports.DeleteDeliveryService = DeleteDeliveryService;
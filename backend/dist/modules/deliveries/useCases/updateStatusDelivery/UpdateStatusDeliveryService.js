"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateStatusDeliveryService = void 0;

var _AppError = _interopRequireDefault(require("../../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateStatusDeliveryService {
  constructor(deliveryRepository) {
    this.deliveryRepository = deliveryRepository;
  }

  async execute({
    deliveryId,
    status
  }) {
    const delivery = await this.deliveryRepository.getDeliveryById(deliveryId);

    if (!delivery) {
      throw new _AppError.default("Não foi possivel encontrar essa entrega!");
    }

    const newDeliery = await this.deliveryRepository.updateStatusDelivered({
      id: delivery.id,
      status
    });
    return newDeliery;
  }

}

exports.UpdateStatusDeliveryService = UpdateStatusDeliveryService;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssociateDeliveryService = void 0;

var _AppError = _interopRequireDefault(require("../../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AssociateDeliveryService {
  constructor(deliveryRepository) {
    this.deliveryRepository = deliveryRepository;
  }

  async execute({
    deliveryId,
    userId
  }) {
    const delivery = await this.deliveryRepository.getDeliveryById(deliveryId);

    if (!delivery) {
      throw new _AppError.default("Não foi possivel encontrar essa entrega!");
    }

    const newDeliery = await this.deliveryRepository.updateDeliveryForAssociante({
      delivered_by: userId,
      id: deliveryId
    });
    return newDeliery;
  }

}

exports.AssociateDeliveryService = AssociateDeliveryService;
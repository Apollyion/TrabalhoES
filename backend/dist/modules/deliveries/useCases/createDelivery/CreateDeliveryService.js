"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDeliveryService = void 0;

var _AppError = _interopRequireDefault(require("../../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateDeliveryService {
  constructor(deliveryRepository, userRepository) {
    this.deliveryRepository = deliveryRepository;
    this.userRepository = userRepository;
  }

  async execute(body) {
    const user = await this.userRepository.findUserById(body.created_by);

    if (!user) {
      throw new _AppError.default("user not found", 404);
    }

    const delivery = await this.deliveryRepository.createDelivery(body);
    return delivery;
  }

}

exports.CreateDeliveryService = CreateDeliveryService;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDeliveryController = void 0;

var _implemantation = require("../../repository/implemantation");

var _GetDeliveryService = require("./GetDeliveryService");

class GetDeliveryController {
  async handle(request, response) {
    const {
      deliveryId
    } = request.params;
    const deliveryRepository = new _implemantation.DeliveryRepository();
    const service = new _GetDeliveryService.GetDeliveryService(deliveryRepository);
    const delivery = await service.execute(deliveryId);
    return response.json(delivery);
  }

}

exports.GetDeliveryController = GetDeliveryController;
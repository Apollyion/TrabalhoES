"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteDeliveryController = void 0;

var _implemantation = require("../../repository/implemantation");

var _DeleteDeliveryService = require("./DeleteDeliveryService");

class DeleteDeliveryController {
  async handle(request, response) {
    const {
      deliveryId
    } = request.params;
    const deliveryRepository = new _implemantation.DeliveryRepository();
    const service = new _DeleteDeliveryService.DeleteDeliveryService(deliveryRepository);
    const delivery = await service.execute(deliveryId);
    return response.json(delivery);
  }

}

exports.DeleteDeliveryController = DeleteDeliveryController;
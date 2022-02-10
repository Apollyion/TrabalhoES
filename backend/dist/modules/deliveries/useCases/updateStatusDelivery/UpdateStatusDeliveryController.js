"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateStatusDeliveryController = void 0;

var _implemantation = require("../../repository/implemantation");

var _UpdateStatusDeliveryService = require("./UpdateStatusDeliveryService");

class UpdateStatusDeliveryController {
  async handle(request, response) {
    const {
      deliveryId
    } = request.params;
    const {
      status
    } = request.body;
    const formData = {
      status,
      deliveryId
    };
    const deliveryRepository = new _implemantation.DeliveryRepository();
    const service = new _UpdateStatusDeliveryService.UpdateStatusDeliveryService(deliveryRepository);
    const data = await service.execute(formData);
    return response.json(data);
  }

}

exports.UpdateStatusDeliveryController = UpdateStatusDeliveryController;
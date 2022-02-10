"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssociateDeliveryController = void 0;

var _implemantation = require("../../repository/implemantation");

var _AssociateDeliveryService = require("./AssociateDeliveryService");

class AssociateDeliveryController {
  async handle(request, response) {
    const {
      deliveryId
    } = request.params;
    const formData = {
      userId: request.user.id,
      deliveryId
    };
    const deliveryRepository = new _implemantation.DeliveryRepository();
    const service = new _AssociateDeliveryService.AssociateDeliveryService(deliveryRepository);
    const data = await service.execute(formData);
    return response.json(data);
  }

}

exports.AssociateDeliveryController = AssociateDeliveryController;
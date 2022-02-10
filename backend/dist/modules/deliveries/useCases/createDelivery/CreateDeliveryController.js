"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDeliveryController = void 0;

var _implemantation = require("../../../users/repository/implemantation");

var _implemantation2 = require("../../repository/implemantation");

var _CreateDeliveryService = require("./CreateDeliveryService");

class CreateDeliveryController {
  async handle(request, response) {
    const {
      body
    } = request;
    const deliveryRepository = new _implemantation2.DeliveryRepository();
    const userRepository = new _implemantation.UserRepository();
    const service = new _CreateDeliveryService.CreateDeliveryService(deliveryRepository, userRepository);
    const data = await service.execute(body);
    return response.json(data);
  }

}

exports.CreateDeliveryController = CreateDeliveryController;
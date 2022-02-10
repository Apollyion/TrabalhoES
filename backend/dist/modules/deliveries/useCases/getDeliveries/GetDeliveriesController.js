"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDeliveriesController = void 0;

var _implemantation = require("../../repository/implemantation");

var _GetDeliveriesService = require("./GetDeliveriesService");

class GetDeliveriesController {
  async handle(request, response) {
    const {
      query
    } = request;
    const deliveryRepository = new _implemantation.DeliveryRepository();
    const service = new _GetDeliveriesService.GetDeliveriesService(deliveryRepository);
    const deliveries = await service.execute(query);
    return response.json({
      deliveries
    });
  }

}

exports.GetDeliveriesController = GetDeliveriesController;
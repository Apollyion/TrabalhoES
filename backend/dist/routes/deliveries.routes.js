"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deliveriesRoute = void 0;

var _express = require("express");

var _expressValidation = require("express-validation");

var _ensureAutheticated = require("../middlewares/ensureAutheticated");

var _validateType = require("../middlewares/validateType");

var _AssociateDeliveryController = require("../modules/deliveries/useCases/associateDelivery/AssociateDeliveryController");

var _CreateDeliveryController = require("../modules/deliveries/useCases/createDelivery/CreateDeliveryController");

var _DeleteDeliveryController = require("../modules/deliveries/useCases/deleteDelivery/DeleteDeliveryController");

var _GetDeliveriesController = require("../modules/deliveries/useCases/getDeliveries/GetDeliveriesController");

var _GetDeliveryController = require("../modules/deliveries/useCases/getDelivery/GetDeliveryController");

var _UpdateStatusDeliveryController = require("../modules/deliveries/useCases/updateStatusDelivery/UpdateStatusDeliveryController");

var _schemas = require("./schemas");

const deliveriesRoute = (0, _express.Router)();
exports.deliveriesRoute = deliveriesRoute;
const createDeliveryController = new _CreateDeliveryController.CreateDeliveryController();
deliveriesRoute.post("/", _ensureAutheticated.ensureAutheticaded, (0, _validateType.ValidateType)("CLIENT"), (0, _expressValidation.validate)(_schemas.DeliverySchema), createDeliveryController.handle);
const getDeliveriesController = new _GetDeliveriesController.GetDeliveriesController();
deliveriesRoute.get("/", _ensureAutheticated.ensureAutheticaded, getDeliveriesController.handle);
const getDeliveryController = new _GetDeliveryController.GetDeliveryController();
deliveriesRoute.get("/:deliveryId", _ensureAutheticated.ensureAutheticaded, getDeliveryController.handle);
const deleteDeliveryController = new _DeleteDeliveryController.DeleteDeliveryController();
deliveriesRoute.delete("/:deliveryId", _ensureAutheticated.ensureAutheticaded, deleteDeliveryController.handle);
const associateDeliveryController = new _AssociateDeliveryController.AssociateDeliveryController();
deliveriesRoute.put("/:deliveryId", _ensureAutheticated.ensureAutheticaded, (0, _validateType.ValidateType)("DELIVERYMAN"), associateDeliveryController.handle);
const updateStatusDeliveryController = new _UpdateStatusDeliveryController.UpdateStatusDeliveryController();
deliveriesRoute.put("/status/:deliveryId", _ensureAutheticated.ensureAutheticaded, updateStatusDeliveryController.handle);
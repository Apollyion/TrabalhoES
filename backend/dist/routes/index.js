"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _deliveries = require("./deliveries.routes");

var _users = require("./users.routes");

const routes = (0, _express.Router)();
exports.routes = routes;
routes.use('/users', _users.userRoute);
routes.use('/deliveries', _deliveries.deliveriesRoute);
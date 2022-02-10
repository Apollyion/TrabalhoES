"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutheticateUserController = void 0;

var _implemantation = require("../../repository/implemantation");

var _AutheticateUserService = require("./AutheticateUserService");

class AutheticateUserController {
  async handle(request, response) {
    const {
      body
    } = request;
    const userRepository = new _implemantation.UserRepository();
    const service = new _AutheticateUserService.AutheticateUserService(userRepository);
    const data = await service.execute(body);
    return response.json(data);
  }

}

exports.AutheticateUserController = AutheticateUserController;
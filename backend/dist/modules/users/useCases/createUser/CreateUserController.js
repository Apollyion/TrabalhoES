"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;

var _implemantation = require("../../repository/implemantation");

var _CreateUserService = require("./CreateUserService");

class CreateUserController {
  async handle(request, response) {
    const {
      user,
      adresses
    } = request.body;
    const userRepository = new _implemantation.UserRepository();
    const service = new _CreateUserService.CreateUserService(userRepository);
    const data = await service.execute({
      user,
      adresses
    });
    return response.json(data);
  }

}

exports.CreateUserController = CreateUserController;
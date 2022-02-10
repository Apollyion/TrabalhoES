"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserController = void 0;

var _implemantation = require("../../repository/implemantation");

var _UpdateUserService = require("./UpdateUserService");

class UpdateUserController {
  async handle(request, response) {
    const {
      user,
      adresses
    } = request.body;
    const userRepository = new _implemantation.UserRepository();
    const service = new _UpdateUserService.UpdateUserService(userRepository);
    const data = await service.execute({
      user,
      adresses
    });
    return response.json(data);
  }

}

exports.UpdateUserController = UpdateUserController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMyProfileController = void 0;

var _implemantation = require("../../repository/implemantation");

var _GetMyProfileService = require("./GetMyProfileService");

class GetMyProfileController {
  async handle(request, response) {
    const user_id = request.user.id;
    const userRepository = new _implemantation.UserRepository();
    const service = new _GetMyProfileService.GetMyProfileService(userRepository);
    const data = await service.execute(user_id);
    return response.json(data);
  }

}

exports.GetMyProfileController = GetMyProfileController;
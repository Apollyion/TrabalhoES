"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateType = ValidateType;

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _implemantation = require("../modules/users/repository/implemantation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ValidateType(type) {
  return async (request, response, next) => {
    const user_id = request.user.id;
    const userRepository = new _implemantation.UserRepository();
    const user = await userRepository.findUserById(user_id);

    if (user.type !== type) {
      throw new _AppError.default("don't have permission", 403);
    }

    next();
  };
}
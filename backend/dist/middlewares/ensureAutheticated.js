"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAutheticaded = ensureAutheticaded;

var _jsonwebtoken = require("jsonwebtoken");

var _config = require("../config");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _implemantation = require("../modules/users/repository/implemantation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function ensureAutheticaded(request, response, next) {
  const {
    authorization
  } = request.headers;

  if (!authorization) {
    throw new _AppError.default("token not exist", 401);
  }

  const [, token] = authorization.split(" ");

  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, _config.config.SECRET_TOKEN);
    const userRepository = new _implemantation.UserRepository();
    const user = await userRepository.findUserById(user_id);

    if (!user) {
      throw new _AppError.default("User not found!", 404);
    }

    request.user = {
      id: user_id
    };
    next();
  } catch (err) {
    console.log("erro ", err);
    throw new _AppError.default(`token invalid!`, 401);
  }
}
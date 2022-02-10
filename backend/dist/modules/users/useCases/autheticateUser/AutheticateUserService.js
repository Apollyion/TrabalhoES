"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutheticateUserService = void 0;

var _AppError = _interopRequireDefault(require("../../../../errors/AppError"));

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

var _config = require("../../../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AutheticateUserService {
  constructor(userRepository) {
    this.userRepository = void 0;
    this.userRepository = userRepository;
  }

  async execute({
    email,
    password
  }) {
    const userExists = await this.userRepository.findUserByEmail(email);

    if (!userExists) {
      throw new _AppError.default("Email ou senha estão incorretos!");
    }

    const validPassword = await (0, _bcrypt.compare)(password, String(userExists.password));

    if (!validPassword) {
      throw new _AppError.default("Email ou senha estão incorretos!");
    }

    const token = (0, _jsonwebtoken.sign)({}, _config.config.SECRET_TOKEN, {
      subject: userExists.id,
      expiresIn: '48h'
    });
    return {
      full_name: userExists.full_name,
      email: userExists.email,
      token
    };
  }

}

exports.AutheticateUserService = AutheticateUserService;
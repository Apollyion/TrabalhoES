"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserService = void 0;

var _AppError = _interopRequireDefault(require("../../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUserService {
  constructor(userRepository) {
    this.userRepository = void 0;
    this.userRepository = userRepository;
  }

  async execute({
    user,
    adresses
  }) {
    const userAlredyExists = await this.userRepository.findUserByEmail(user.email);

    if (userAlredyExists) {
      throw new _AppError.default('Email já está em uso!');
    }

    const userCreated = await this.userRepository.createUser({
      user,
      adresses
    });
    delete userCreated.password;
    return userCreated;
  }

}

exports.CreateUserService = CreateUserService;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserService = void 0;

var _AppError = _interopRequireDefault(require("../../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateUserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({
    user,
    adresses
  }) {
    const userExists = await this.userRepository.findUserByEmail(user.email);

    if (!userExists) {
      throw new _AppError.default("Não conseguimos econtrar este usuario");
    }

    const newUser = await this.userRepository.updateUser({
      user,
      adresses
    });
    return newUser;
  }

}

exports.UpdateUserService = UpdateUserService;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMyProfileService = void 0;

class GetMyProfileService {
  constructor(userRepository) {
    this.userRepository = void 0;
    this.userRepository = userRepository;
  }

  async execute(user_id) {
    const user = await this.userRepository.findUserById(user_id);
    return user;
  }

}

exports.GetMyProfileService = GetMyProfileService;
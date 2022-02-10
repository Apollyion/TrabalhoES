import { Request, Response } from "express";
import { UserRepository } from "../../repository/implemantation";
import { AutheticateUserService } from "./AutheticateUserService";

export class AutheticateUserController {
  async handle(request: Request, response: Response) {
    const { body } = request

    const userRepository = new UserRepository()
    const service = new AutheticateUserService(userRepository)

    const data = await service.execute(body)

    return response.json(data)
  }
}
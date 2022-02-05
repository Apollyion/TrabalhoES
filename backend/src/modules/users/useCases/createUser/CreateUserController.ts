import { Request, Response } from "express";
import { UserRepository } from "../../repository/implemantation";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { body } = request

    const userRepository = new UserRepository()
    const service = new CreateUserService(userRepository)

    const data = await service.execute(body)

    return response.json(data)
  }
}
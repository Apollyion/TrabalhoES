import { Request, Response } from "express";
import { UserRepository } from "../../repository/implemantation";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { user, adresses } = request.body

    const userRepository = new UserRepository()
    const service = new CreateUserService(userRepository)

    const data = await service.execute({
      user,
      adresses
    })

    return response.json(data)
  }
}
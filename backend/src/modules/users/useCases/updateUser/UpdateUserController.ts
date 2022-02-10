import { Request, Response } from "express";
import { UserRepository } from "../../repository/implemantation";
import { UpdateUserService } from "./UpdateUserService";


export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { user, adresses } = request.body

    const userRepository = new UserRepository()
    const service = new UpdateUserService(userRepository)

    const data = await service.execute({user, adresses})

    return response.json(data)
  }
}
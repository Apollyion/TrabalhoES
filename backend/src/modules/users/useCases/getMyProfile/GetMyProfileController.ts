import { Request, Response } from "express";
import { UserRepository } from "../../repository/implemantation";
import { GetMyProfileService } from "./GetMyProfileService";

export class GetMyProfileController {
  async handle(request: Request, response: Response) {
    const user_id = request.user.id

    const userRepository = new UserRepository()
    const service = new GetMyProfileService(userRepository)

    const data = await service.execute(user_id)

    return response.json(data)
  }
}
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { UserRepository } from "../modules/users/repository/implemantation";

export function ValidateType(type: "CLIENT" | "DELIVERYMAN") {
  return async (request: Request, response: Response, next: NextFunction) => {
    const user_id = request.user.id

    const userRepository = new UserRepository()
    const user = await userRepository.findUserById(user_id)

    if(user.type !== type) {
      throw new AppError("don't have permission", 403)
    }

    next()
  }
}
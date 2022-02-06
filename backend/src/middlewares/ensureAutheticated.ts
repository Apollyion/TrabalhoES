
  
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { config } from "../config";
import AppError from "../errors/AppError";
import { UserRepository } from "../modules/users/repository/implemantation";
// import dotenv from 'dotenv'
// dotenv.config()

interface IPayload {
  sub: string;
}
export async function ensureAutheticaded(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError("token not exist", 401);
  }

  const [, token] = authorization.split(" ");
  try {
    const { sub: user_id } = verify(token, config.SECRET_TOKEN) as IPayload;

    const userRepository = new UserRepository();

    const user = await userRepository.findUserById(user_id)

    if(!user){
      throw new AppError("Confirme your email first")
    }
    
    request.user = {
      id: user_id,
    };

    next();
  } catch (err) {
    console.log("erro ", err)
    throw new AppError(`token invalid!`, 401);
  }
}
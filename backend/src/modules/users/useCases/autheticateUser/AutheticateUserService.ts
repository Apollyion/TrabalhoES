import AppError from "../../../../errors/AppError";
import { IRepositoryUSer } from "../../repository/IRepositoryUser";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../../../../config";

interface IRequest {
  email: string;
  password: string;
}

export class AutheticateUserService {
  private userRepository: IRepositoryUSer;
  constructor(userRepository: IRepositoryUSer) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }: IRequest) {
    const userExists = await this.userRepository.findUserByEmail(email);

    if (!userExists) {
      throw new AppError("Email ou senha estão incorretos!");
    }

    const validPassword = await compare(password, String(userExists.password));

    if (!validPassword) {
      throw new AppError("Email ou senha estão incorretos!");
    }

    const token = sign({}, config.SECRET_TOKEN, {
      subject: userExists.id,
      expiresIn: '48h'
    });

    return {
      full_name: userExists.full_name,
      email: userExists.email,
      token
    }
  }
}

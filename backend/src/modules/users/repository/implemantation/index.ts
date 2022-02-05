import { IUser } from "../../userModel";
import { IRepositoryUSer } from "../IRepositoryUser";
import { hashSync } from 'bcrypt'
import { db } from "../../../../database";

export class UserRepository implements IRepositoryUSer {
  async createUser(body: IUser) {
    const text = `INSERT INTO users (full_name, email, password, phone) values ($1, $2, $3, $4) RETURNING *`
    const passwordHash = hashSync(body.password, 8)
    const values = [body.full_name, body.email, passwordHash, body.phone]

    const response = await db.query(text, values)
    
    return  response.rows[0]
  }

  async findUserByEmail(email: string) {
    const text = `SELECT * FROM users WHERE users.email=$1`
    const values = [email]

    const respose = await db.query(text, values)

    return respose.rows[0]
  }
}
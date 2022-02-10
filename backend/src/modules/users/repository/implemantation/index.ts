import { IAdress, IUser } from "../../userModel";
import { ICreateUser, IRepositoryUSer } from "../IRepositoryUser";
import { hashSync } from "bcrypt";
import { db } from "../../../../database";
export class UserRepository implements IRepositoryUSer {
  async createUser({ user, adresses }: ICreateUser) {
    const passwordHash = hashSync(String(user.password), 8);

    //user
    const textUser = `INSERT INTO users (type, full_name, description, document, email, password) values ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const valuesUser = [
      user.type,
      user.full_name,
      user.description,
      user.document,
      user.email,
      passwordHash,
    ];

    const responseUser = await db.query(textUser, valuesUser);

    let userCreated = responseUser.rows[0] as IUser;

    //adresss
    const textAdress = `INSERT INTO adresses (street, district, number, city, state, user_id) values ($1, $2, $3, $4, $5, $6) RETURNING *`;
    
    const Adresses: IAdress [] = []
    for await (const adress of adresses) {
      const valuesAdress = [
        adress.street,
        adress.district,
        adress.number,
        adress.city,
        adress.state,
        userCreated.id
      ];

      const responseAdress = await db.query(textAdress, valuesAdress);

      Adresses.push(responseAdress.rows[0])
    }

    userCreated.adresses = Adresses

    return userCreated
  }

  async findUserByEmail(email: string) {
    const text = `SELECT * FROM users WHERE users.email=$1`;
    const values = [email];

    const response = await db.query(text, values);

    return response.rows[0];
  }

  async findUserById(id: string) {
    //user
    const textUser = `SELECT * FROM users WHERE users.id=$1`;
    const valuesUser = [id];

    const responseUser = await db.query(textUser, valuesUser);
    const user = responseUser?.rows[0] as IUser;
    if(user) delete user.password

    //adresses
    const textAdress = `SELECT * FROM adresses a WHERE a.user_id=$1`;
    const valuesAdress = [id];

    const responseAdresses = await db.query(textAdress, valuesAdress)

    if(responseAdresses.rows.length > 0) {
      const adresses = responseAdresses?.rows as IAdress[];
  
      user.adresses = adresses
    }

    return user;
  }

  async updateUser({ user, adresses }: ICreateUser) {
    
    const textUser = `UPDATE users SET full_name=$1, description=$2, document=$3, email=$4 WHERE id=$5 RETURNING *`
    const valuesUser = [
      user.full_name,
      user.description,
      user.document,
      user.email,
      user.id
    ];

    const responseUser = await db.query(textUser, valuesUser);

    let userUpdeted = responseUser.rows[0] as IUser;

    const textAdress = `UPDATE adresses SET street=$1, district=$2, number=$3, city=$4, state=$5 WHERE id=$6 RETURNING *`
    const Adresses: IAdress [] = []
    for await (const adress of adresses) {
      const valuesAdress = [
        adress.street,
        adress.district,
        adress.number,
        adress.city,
        adress.state,
        adress.id
      ];

      const responseAdress = await db.query(textAdress, valuesAdress);

      Adresses.push(responseAdress.rows[0])
    }

    userUpdeted.adresses = Adresses

    return userUpdeted
  }
}

import Joi from 'joi'

export const CreateUserSchema = {
  body: Joi.object({
    full_name: Joi.string(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string()
  })
}
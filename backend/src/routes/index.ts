import { Router } from  'express'
import { userRoute } from './users.routes'
import { validate } from 'express-validation'
import { CreateUserSchema } from './schemas'

export const routes = Router()

routes.use("/users", validate(CreateUserSchema), userRoute)
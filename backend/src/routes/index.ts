import { Router } from  'express'
import { userRoute } from './users.routes'

export const routes = Router()

routes.use("/users", userRoute)
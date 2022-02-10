import { Router } from  'express'
import { deliveriesRoute } from './deliveries.routes'
import { userRoute } from './users.routes'

export const routes = Router()

routes.use('/users', userRoute)
routes.use('/deliveries', deliveriesRoute)
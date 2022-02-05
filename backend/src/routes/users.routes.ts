import { Router } from 'express'
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController'

export const userRoute = Router()

const createUserController = new CreateUserController()
userRoute.post('/', createUserController.handle)
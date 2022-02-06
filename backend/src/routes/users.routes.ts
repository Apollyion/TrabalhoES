import { Router } from 'express'
import { validate } from 'express-validation'
import { ensureAutheticaded } from '../middlewares/ensureAutheticated'
import { AutheticateUserController } from '../modules/users/useCases/autheticateUser/AutheticateUserController'
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController'
import { GetMyProfileController } from '../modules/users/useCases/getMyProfile/GetMyProfileController'
import { CreateUserSchema, LoginSchema } from './schemas'

export const userRoute = Router()

const createUserController = new CreateUserController()
userRoute.post('/', validate(CreateUserSchema), createUserController.handle)

const autheticateUserController = new AutheticateUserController()
userRoute.post('/login', validate(LoginSchema), autheticateUserController.handle)

const getMyProfileController = new GetMyProfileController()
userRoute.get('/myprofile', ensureAutheticaded, getMyProfileController.handle)
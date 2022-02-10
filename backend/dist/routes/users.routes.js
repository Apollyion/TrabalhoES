"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoute = void 0;

var _express = require("express");

var _expressValidation = require("express-validation");

var _ensureAutheticated = require("../middlewares/ensureAutheticated");

var _AutheticateUserController = require("../modules/users/useCases/autheticateUser/AutheticateUserController");

var _CreateUserController = require("../modules/users/useCases/createUser/CreateUserController");

var _GetMyProfileController = require("../modules/users/useCases/getMyProfile/GetMyProfileController");

var _UpdateUserController = require("../modules/users/useCases/updateUser/UpdateUserController");

var _schemas = require("./schemas");

const userRoute = (0, _express.Router)();
exports.userRoute = userRoute;
const createUserController = new _CreateUserController.CreateUserController();
userRoute.post('/', (0, _expressValidation.validate)(_schemas.CreateUserSchema), createUserController.handle);
const updateUserController = new _UpdateUserController.UpdateUserController();
userRoute.put('/', _ensureAutheticated.ensureAutheticaded, updateUserController.handle);
const autheticateUserController = new _AutheticateUserController.AutheticateUserController();
userRoute.post('/login', (0, _expressValidation.validate)(_schemas.LoginSchema), autheticateUserController.handle);
const getMyProfileController = new _GetMyProfileController.GetMyProfileController();
userRoute.get('/myprofile', _ensureAutheticated.ensureAutheticaded, getMyProfileController.handle);
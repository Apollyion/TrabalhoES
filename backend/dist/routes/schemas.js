"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginSchema = exports.DeliverySchema = exports.CreateUserSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CreateUserSchema = {
  body: _joi.default.object({
    user: _joi.default.object({
      type: _joi.default.string().required().valid("CLIENT", "DELIVERYMAN"),
      description: _joi.default.string(),
      full_name: _joi.default.string(),
      document: _joi.default.string().required(),
      email: _joi.default.string().required(),
      password: _joi.default.string().required()
    }).required(),
    adresses: _joi.default.array().items(_joi.default.object({
      street: _joi.default.string(),
      district: _joi.default.string(),
      number: _joi.default.string(),
      city: _joi.default.string(),
      state: _joi.default.string()
    }))
  })
};
exports.CreateUserSchema = CreateUserSchema;
const LoginSchema = {
  body: _joi.default.object({
    email: _joi.default.string().required(),
    password: _joi.default.string().required()
  })
};
exports.LoginSchema = LoginSchema;
const DeliverySchema = {
  body: _joi.default.object({
    item_name: _joi.default.string().required(),
    description: _joi.default.string(),
    street: _joi.default.string(),
    district: _joi.default.string(),
    number: _joi.default.number(),
    city: _joi.default.string(),
    state: _joi.default.string(),
    complement: _joi.default.string(),
    created_by: _joi.default.string().required()
  })
};
exports.DeliverySchema = DeliverySchema;
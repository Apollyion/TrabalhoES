"use strict";

require("express-async-errors");

var _express = _interopRequireDefault(require("express"));

var _expressValidation = require("express-validation");

var _database = require("./database");

var _AppError = _interopRequireDefault(require("./errors/AppError"));

var _routes = require("./routes");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
(0, _database.connect)();
app.use(_routes.routes);
app.get('/hello', (request, response) => {
  return response.json({
    message: 'ok'
  });
});
app.use((err, request, response, next) => {
  if (err instanceof _AppError.default) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      error: err.message
    });
  }

  if (err instanceof _expressValidation.ValidationError) {
    const errors = [];
    Object.values(err.details).forEach(patch => {
      patch.forEach(error => errors.push(error.message));
    });
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.error,
      errors: errors
    });
  }

  console.log("err", err);
  return response.status(500).json({
    status: 'error',
    error: 'Internal server error'
  });
});
app.listen(3001, () => {
  console.log("api inciada...");
});
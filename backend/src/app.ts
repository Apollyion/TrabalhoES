import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express'
import { ValidationError } from 'express-validation'
import { connect } from './database'
import AppError from './errors/AppError'
import { routes } from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
connect()

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      error: err.message,
    });
  }

  if (err instanceof ValidationError) {
    const errors: string[] = [];

    Object.values(err.details).forEach(patch => {
      patch.forEach((error: any) => errors.push(error.message));
    });

    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.error,
      errors: errors,
    });
  }

  console.log("err", err)

  return response.status(500).json({
    status: 'error',
    error: 'Internal server error',
  });
});

app.listen(3001, () => {
    console.log("api inciada...")
})
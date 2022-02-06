import dotenv from 'dotenv'
dotenv.config()

export const config = {
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  SECRET_TOKEN: process.env.SECRET_TOKEN || ''
}
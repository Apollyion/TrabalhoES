import dotenv from 'dotenv'
dotenv.config()

export const config = {
  DATABASE_URL: process.env.DATABASE_URL,
  SECRET_TOKEN: process.env.SECRET_TOKEN || '',
  // POSTGRES_USER: process.env.POSTGRES_USER,
  // POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  // POSTGRES_PORT: process.env.POSTGRES_PORT,
  // POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  // POSTGRES_HOST: process.env.POSTGRES_HOST
}
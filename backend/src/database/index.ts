import { Pool } from 'pg'
import { config } from '../config'

const db = new Pool({
  connectionString: config.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
})

const connect = async () => {
    await db.connect()
}

export {
    connect,
    db
}
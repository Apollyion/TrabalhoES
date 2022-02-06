import { Pool } from 'pg'
import { config } from '../config'

const db = new Pool({
    host: 'localhost',
    user: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DATABASE,
    port: Number(config.POSTGRES_PORT)
})

const connect = async () => {
    await db.connect()
}

export {
    connect,
    db
}
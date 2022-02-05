import { Pool } from 'pg'

const db = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '01075783',
    database: 'deliveryman',
    port: 5432
})

const connect = async () => {
    await db.connect()
}

export {
    connect,
    db
}
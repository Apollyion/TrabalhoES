import express from 'express'
import { connect } from './database'
import { routes } from './routes'
const app = express()

app.use(express.json())
connect()

app.use(routes)

app.listen(3000, () => {
    console.log("api inciada...")
})
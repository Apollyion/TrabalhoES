import express, { response } from 'express'
const app = express()


app.get("/helo", (request, response) => {
    return response.json({
        message: 'Hello'
    })
})

app.listen(3000, () => {
    console.log("api inciada...")
})
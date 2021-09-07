import express from 'express'
import '@controllers/UsersController'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

const port = process.env.PORT ?? 3333 

app.listen(port)

import express from 'express'
import '@controllers/UsersController'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

const PORT = process.env.PORT ?? 3333 

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})

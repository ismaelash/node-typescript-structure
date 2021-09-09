import express from 'express'
import * as UsersController from '@controllers/UsersController'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'backend works!' })
})

app.get('/users/:id', (request, response) => {
  console.log("userId", req.params.id)
  let user = UsersController.getOneUser(req.params.id)
  return response.json(user)
})

const PORT = process.env.PORT ?? 3333 

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})

import { User } from '@models/User'

export class UsersController {
  async getOneUser (id: string): User {
    const user = new User(id, "Ismael Ash", "contato@ismaelnascimento.com")
    return user
  }
}
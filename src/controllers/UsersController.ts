import { User } from '@models/User'

export async function getOneUser (id: string): Promise<User> {
  const user = new User(id, "Ismael Ash", "contato@ismaelnascimento.com")
  return user
}
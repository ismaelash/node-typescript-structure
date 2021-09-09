import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Ismael Ash'

  expect(user.name).toEqual('Ismael Ash')
})

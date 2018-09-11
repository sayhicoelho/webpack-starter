import User from './models/User'

let user = new User('Example', 'example@example.com')

user.addRole('admin')

console.log(user.isAdmin())
console.log(process.env.BASE_URL)

import User from './models/User'
import './main.scss'

let user = new User('Example', 'example@example.com')

user.addRole('admin')

console.log(user.isAdmin())
console.log(process.env.BASE_URL)

export default class User {
  constructor (name, email, roles = ['user']) {
    this.name = name
    this.email = email
    this.roles = roles
  }

  addRole (role) {
    const acceptedRoles = ['admin', 'manager', 'editor', 'user']

    if (this.roles.includes(role))
      return

    if (acceptedRoles.includes(role)) {
      this.roles.push(role)
    }
  }

  checkRole (role) {
    return this.roles.includes(role)
  }

  checkAnyRole (roles) {
    for (let role of roles) {
      if (this.roles.includes(role))
        return true
    }

    return false
  }

  isAdmin () {
    return this.checkRole('admin')
  }

  isManager () {
    return this.checkRole('manager')
  }

  isEditor () {
    return this.checkRole('editor')
  }

  isUser () {
    return this.checkRole('user')
  }

  canAccessRestrictedArea () {
    return this.isAdmin()
      || this.isManager()
      || this.isEditor()
  }
}

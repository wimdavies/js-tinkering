const User = require('./user');

class UserBase {

  // `users` is an array of User instances
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => user.getName());
  }

  getIntroductions() {
    return this.users.map((user) => user.getIntroduction());
  }
}

module.exports = UserBase
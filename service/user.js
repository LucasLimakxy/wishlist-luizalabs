const userDAO = require('../dao/user');

class UserService {
  getUser(login) {
    return userDAO.getUser(login);
  }
  
  createUser(login, password) {
    return userDAO.createUser(login, password);
  }
}

module.exports = new UserService();
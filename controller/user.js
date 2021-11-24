const userService = require('../service/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const dotenv = require('dotenv').config().parsed;

class UserController {
  async authenticate (req, res) {
    const { login, password } = req.body;
    const user = await userService.getUser(login);    

    if (!user) {
        return res.status(400).json('User not found.');
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(500).json('Invalid credentials.')
    }

    const token = jwt.sign({ id: user.id }, dotenv.SECRET_KEY, {
        expiresIn: 86400
    });
    
    return res.status(200).json({ token: token});
  }

  async createUser(req, res) {
    try {
      const { login, password } = req.body;

      if (!login || !password) {
        return res.status(500).json("Required paramethers failed.");
      }

      await userService.createUser(login, password);
      
      return res.status(201).json("The user was created with successfully.");
    } catch (err) {
      return res.status(500).json('The user already exists.')
    }
  }
}

module.exports = new UserController();
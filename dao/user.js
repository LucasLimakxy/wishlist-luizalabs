const db = require('../database/database');
const bcrypt = require("bcrypt");

class UserDAO{
    async getUser(login) {
        const [user] = await db('user')
        .select()
        .where({
            login
        });
        
        return user;
    }

    async createUser(login, password) {
        const hash = await bcrypt.hash(password, 5); 
        const [id] = await db('user')
            .insert({
                login,
                password: hash
            })
            .returning('id');

        return id;
    }
}

module.exports = new UserDAO();
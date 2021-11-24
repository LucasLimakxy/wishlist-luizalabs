const db = require('../database/database');

class ClientDAO{
    async createClient(email, name) {
        const [id] = await db('client')
            .insert({
                email,
                name
            })
            .returning('id');

        return id;
    }

    async updateClient(id, email, name) {
        await db('client')
            .update({
                email,
                name
            })
            .where({
                id
            })
            .returning('id');
    }

    async deleteClient(id) {
        await db('client')
            .delete()
            .where({
                id
            });
    }

    async listClient() {
        const clients = await db('client')
        .select().then(function (clients) {
            return clients;
         });
        
        return clients;
    }

    async detailClient(id) {
        const [client] = await db('client')
        .select()
        .where({
            id
        });
        
        return client;
    }
}

module.exports = new ClientDAO();
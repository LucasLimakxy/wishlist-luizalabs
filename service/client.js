const clientDAO = require('../dao/client');

class ClientService {
  createClient(email, name) {
    return clientDAO.createClient(email, name);
  }

  updateClient(id, email, name) {
    return clientDAO.updateClient(id, email, name);
  }

  deleteClient(id) {
    return clientDAO.deleteClient(id);
  }

  listClient() {
    return clientDAO.listClient();
  }

  detailClient(id) {
    return clientDAO.detailClient(id);
  }
}

module.exports = new ClientService();
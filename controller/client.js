const clientService = require('../service/client');

class ClientController {
  
  async createClient(req, res) {
    try {
      const { email, name } = req.body;

      if (!email || !name) {
        return res.status(500).json("Required paramethers failed.");
      }

      await clientService.createClient(email, name);
      
      return res.status(201).json("The client was created with successfully.");
    } catch (err) {
      return res.status(500).json('The client already exists.')
    }
  }
  async updateClient(req, res) {
    try {
      const id = req.params.id;
      const { email, name } = req.body;

      if (!email || !name || !id) {
        return res.status(500).json("Required paramethers failed.");
      }

      const client = await clientService.detailClient(id);

      if (!client) {
        return res.status(200).json("The client does not exist.");
      }

      await clientService.updateClient(id, email, name);

      return res.status(200).json("The client was updated with successfully.");
    } catch (err) {
      return res.status(500).json('Something went wrong.')
    }
  }
  async deleteClient(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(500).json("Required paramethers failed.");
      }

      const client = await clientService.detailClient(id);

      if (!client) {
        return res.status(200).json("The client does not exist.");
      }

      await clientService.deleteClient(id);

      return res.status(200).json("The client was deleted with successfully.");
    } catch (err) {
      return res.status(500).json('Something went wrong.')
    }
  }
  async listClient(req, res) {
    try {
      const clients = await clientService.listClient();
      return res.status(200).json(clients);
    } catch (err) {
      return res.status(500).json('Something went wrong.')
    }
  }
  async detailClient(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(500).json("Required paramethers failed.");
      }

      const client = await clientService.detailClient(id);

      if (!client) {
        return res.status(200).json("The client does not exist.");
      }

      return res.status(200).json(client);
    } catch (err) {
      return res.status(500).json('Something went wrong.');
    }
  }
}

module.exports = new ClientController();
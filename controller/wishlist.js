const wishlistService = require('../service/wishlist');
const clientDAO = require('../dao/client');
const request = require('request');
const dotenv = require('dotenv').config().parsed;

class WishlistController {
  async createClientProduct(req, res) {
    const { client_id, product_id } = req.body;

    if (!client_id || !product_id) {
      return res.status(500).json("Required paramethers failed.");
    }

    const client = await clientDAO.detailClient(client_id);

    if (!client) {
      return res.status(500).json('The client does not exist.');
    }
    
    const url = dotenv.LUIZALABS_URL+'/api/product/'+ product_id +'/'

    request(url, async function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var product = JSON.parse(body);
        
        try {
          await wishlistService.createClientProduct(
            client_id, 
            product_id, 
            product.title, 
            product.image, 
            product.price,
            product.reviewScore ? product.reviewScore : null
          );
          return res.status(200).json('The product was successfully added to the wish list.');
        } catch (err) {
          return res.status(500).json('The wish already exists.');
        }
      } else {
        return res.status(500).json('The product does not exists.');
      }
    });
  }

  async detailWishlist(req, res) {
    const client_id = req.params.client_id;
    try {
      const client = await clientDAO.detailClient(client_id);

      if (!client) {
        return res.status(200).json("The client does not exist.");
      }
      const wishlist = await wishlistService.detailWishlist(client_id);
      
      return res.status(200).json(wishlist);
    } catch (err) {
      return res.status(500).json('Something went wrong.');
    }
  }
}

module.exports = new WishlistController();
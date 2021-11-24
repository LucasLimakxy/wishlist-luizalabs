const wishlistDAO = require('../dao/wishlist');

class WishlistService {
  createClientProduct(client_id, product_id, title, image, price, review_score) {
    return wishlistDAO.createClientProduct(client_id, product_id, title, image, price, review_score);
  }

  detailWishlist(client_id) {
    return wishlistDAO.detailWishlist(client_id);
  }
}

module.exports = new WishlistService();
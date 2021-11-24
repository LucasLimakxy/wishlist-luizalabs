const db = require('../database/database');

class WishlistDAO{
    async createClientProduct(client_id, product_id, title, image, price, review_score) {
        const [id] = await db('client_product')
            .insert({
                client_id,
                product_id,
                title,
                image,
                price,
                review_score
            })
            .returning('id');

        return id;
    }

    async detailWishlist(client_id) {
        const wishlist = await db('client_product')
        .select()
        .where({
            client_id
        });
        
        return wishlist;
    }
}

module.exports = new WishlistDAO();
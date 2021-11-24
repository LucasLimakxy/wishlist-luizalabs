const express = require('express');
const clientController = require('../controller/client');
const wishlistController = require('../controller/wishlist')
const userController = require('../controller/user')
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/authenticate', userController.authenticate);
router.post('/user', userController.createUser);

router.use(authMiddleware);

// Clients
router.get('/clients', clientController.listClient);
router.get('/client/:id', clientController.detailClient);
router.post('/client', clientController.createClient);
router.put('/client/:id', clientController.updateClient);
router.delete('/client/:id', clientController.deleteClient);

// Wishlist
router.post('/wishlist', wishlistController.createClientProduct);
router.get('/wishlist/:client_id', wishlistController.detailWishlist);

module.exports = router;
const { Router } = require('express');
const cartController = require('../controllers/cartController');
const router = Router();

router.get('/card/:id',cartController.get_cart_items);
router.get('/cart/:id',cartController.add_cart_item);
router.delete('/cart/:userId/:itemId,cartController.delete_item');

module.exports = router;



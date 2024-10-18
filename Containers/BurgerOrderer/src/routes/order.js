const express = require('express');
const router = express.Router();
const { submitOrder, orderform } = require('../controllers/orderController.js');

// Routes for handling orders
router.post('/order', submitOrder); 
router.get('/order-form', orderform); 

module.exports = router;

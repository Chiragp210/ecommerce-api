const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/order_controller.js');

router.post('/', createOrder);

module.exports = router;
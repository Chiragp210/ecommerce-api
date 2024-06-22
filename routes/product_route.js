// routes/products.js
const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct } = require('../controllers/product_controller.js');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);

module.exports = router;

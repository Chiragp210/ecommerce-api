// controllers/productController.js
const Product = require('../models/products.js');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error('Error fetching all products:', err.message);
        res.status(500).send('Server error');
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        console.error('Error fetching product by ID:', err.message);
        res.status(500).send('Server error');
    }
};

exports.createProduct = async (req, res) => {
    const { title, price, image, description, category, quantity } = req.body;

    try {
        const newProduct = new Product({ title, price, image, description, category, quantity });
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error('Error creating product:', err.message);
        res.status(500).send('Server error');
    }
};

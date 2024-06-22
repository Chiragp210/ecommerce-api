const Order = require('../models/orderdetails.js');
const User = require('../models/users.js');

// New functionality for creating orders
const createOrder = async (req, res) => {
    const { userId, cartItems, paymentMethod } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const order = new Order({
            user: userId,
            items: cartItems,
            paymentMethod: paymentMethod,
            status: 'Pending'
        });

        const newOrder = await order.save();
        res.json(newOrder);
    } catch (err) {
        console.error('Error creating order:', err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { createOrder };

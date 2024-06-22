// routes/user_route.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/user_controller.js');

router.post('/register', register);
router.post('/login', login);

module.exports = router;

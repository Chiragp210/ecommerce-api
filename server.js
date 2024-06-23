// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/product_route.js');
const authRoutes = require('./routes/user_route.js');
const orderRoutes = require('./routes/order_route.js');
const dotenv = require('dotenv');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3200;

const allowedOrigins = ['http://localhost:3000', 'http://localhost:4200'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin, like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true 
}));


// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);


// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI); 
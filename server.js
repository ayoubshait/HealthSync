require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "views" directory
app.use(express.static(path.join(__dirname, 'views')));

// Redirect root URL to Gestion de Données page
app.get('/', (req, res) => {
    res.redirect('/gestion.html');
});

// Connect to MongoDB using the connection string from the .env file
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('Connection error:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

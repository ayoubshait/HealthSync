const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Export the environment variables for use in other parts of the application
module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
};

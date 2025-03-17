const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
console.log("Attempting to connect to:", MONGODB_URI);

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB");
    process.exit(0);
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }); 
// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS to be more flexible for deployment
app.use(cors({
    origin: process.env.CORS_ORIGIN || process.env.VERCEL_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use("/api/v1", rootRouter);

// For Vercel serverless functions
if (process.env.VERCEL) {
  // Export the Express app as a serverless function
  module.exports = app;
} else {
  // For local development
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
}
// api/index.js
// This file is needed for Vercel serverless functions
const express = require('express');
const cors = require("cors");
const rootRouter = require("../backend/routes/index");
require('dotenv').config();

const app = express();

// Configure CORS to be more flexible for deployment
app.use(cors({
    origin: process.env.CORS_ORIGIN || process.env.VERCEL_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// Mount the router at /v1 for the API
app.use("/v1", rootRouter);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'API is running' });
});

// Export the Express app as a serverless function
module.exports = app; 
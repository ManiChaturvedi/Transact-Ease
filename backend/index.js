// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS to be more flexible for deployment
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
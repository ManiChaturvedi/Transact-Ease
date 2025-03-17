// api/test.js
// Simple test endpoint to verify API functionality

module.exports = (req, res) => {
  res.status(200).json({
    message: 'API test endpoint is working',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    vercelUrl: process.env.VERCEL_URL || 'not available'
  });
}; 
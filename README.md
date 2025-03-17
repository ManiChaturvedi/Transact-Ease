# Paytm Clone

A simple money transfer application with user authentication and account management.

## Project Structure

- **Frontend**: React application with Vite
- **Backend**: Express.js API with MongoDB

## Local Development

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CORS_ORIGIN=http://localhost:5173
   ```

4. Start the server:
   ```
   node index.js
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with:
   ```
   VITE_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Deployment

### Backend Deployment

1. Set up environment variables on your hosting platform:
   - `PORT`: The port your server will run on (often set by the platform)
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure secret for JWT tokens
   - `CORS_ORIGIN`: The URL of your frontend application

2. Deploy your code to the platform.

### Frontend Deployment

1. Update the `.env.production` file with your backend URL:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

2. Build the frontend:
   ```
   cd frontend
   npm run build
   ```

3. Deploy the contents of the `dist` directory to your hosting platform.

## Security Best Practices

1. **JWT Secret**: Use a strong, random string for your JWT_SECRET. Never use simple values like "123456".

2. **MongoDB Connection**: Store your MongoDB connection string securely. Consider using environment variables provided by your hosting platform.

3. **CORS Configuration**: In production, set CORS_ORIGIN to your specific frontend domain instead of '*'.

4. **Password Storage**: This app stores passwords as plain text. In a real application, you should hash passwords using bcrypt.

5. **Environment Variables**: Never commit .env files to version control. Add them to .gitignore.

6. **HTTPS**: Always use HTTPS in production for secure communication.

## Features

- User registration and authentication
- Account balance display
- Money transfer between users
- User search functionality

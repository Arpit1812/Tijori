// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const connectDB = require('./db');
// const authRoutes = require('./routes/auth');
// const authMiddleware = require('./middleware');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// connectDB();

// app.use('/api/auth', authRoutes);

// app.get('/api/protected', authMiddleware, (req, res) => {
//   res.json({ message: 'This is a protected route', userId: req.user });
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// Endpoint to find a user by username (example endpoint)
// app.get('/api/user', async (req, res) => {
//   try {
//     const usernameToFind = 'ArpitDogra'; // Can be retrieved from request parameters if needed
//     const user = await findUserByUsername(usernameToFind);

//     if (user) {
//       res.json(user); // Send the user object as a JSON response
//     } else {
//       res.status(404).send('User not found'); // Handle case where user is not found
//     }
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).send('Internal server error'); // Handle unexpected errors
//   }
// });



// backend/index.js -- CODE SNIPPET 2
// import express from 'express';
// import cors from 'cors';
// import authRoutes from './routes/auth';
// import documentRoutes from './routes/documents';
// const connectDB = require('./db');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/documents', documentRoutes);

// connectDB();


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// // index.js -- CODE 3
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const {connectDB} = require('./db');
// const authRoutes = require('./routes/auth');
// const documentRoutes = require('./routes/documents');
// const authMiddleware = require('./middleware');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// connectDB();

// app.use('/api/auth', authRoutes);
// app.use('/api/documents', documentRoutes);

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//});require('dotenv').config();

const express = require('express');
require('dotenv').config();
const { connectDB } = require('./db');
const uploadRoute = require('./routes/documents');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const { authenticateToken } = require('./middleware');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  methods: 'GET,POST,PUT,DELETE',
};

app.use(cors(corsOptions));
connectDB();
app.use(express.json()); // Use express.json() instead of body-parser

app.use('/api/auth', authRoutes);
app.use('/api/documents', authenticateToken, uploadRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

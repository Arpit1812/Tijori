// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../user');

// const router = express.Router();


// Signup route with JWTtoken  -- 1st code snippet
// router.post('/signup', async (req, res) => {
//   const { username, password, email } = req.body;

//   try {
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword, email });

//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error); // Log the error for debugging
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// Signup route with JWTtoken  -- 2nd code snippet 
// router.post('/signup', async (req, res) => {
//   const { username, password, email } = req.body;

//   try {
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword, email });

//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// // Login route -- 1st code snippet
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error(error); // Log the error for debugging
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Login route -- 2nd code snippet
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

//     res.status(200).json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
// module.exports = router;


// // backend/routes/auth.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../user');
// const authMiddleware = require('../middleware');

// const router = express();

// router.post('/signup', async (req, res) => {
//   try {
//     const { username, password, email } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword, email });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating user' });
//   }
// });

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });

//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const token = jwt.sign({ username: user.username }, 'secretkey', { expiresIn: '1h' });
//   res.json({ token, username: user.username });
// });

// router.get('/profile', authMiddleware, (req, res) => {
//   res.json({ message: 'Profile data', user: req.user });
// });

// module.exports = router;
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../user'); // Assuming User is a MongoDB model or similar

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Make sure JWT_SECRET is defined

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});


router.post('/login', async (req, res) => {
  console.log('Login endpoint hit'); // Check if this route is being triggered

  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'Invalid username' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
    expiresIn: '1h',
  });

  // Log user details and the JWT token
  console.log('User Logged In:', {
    id: user._id,
    username: user.username,
    email: user.email, // If available
    token,
  });

  res.json({ token });
});
module.exports = router;


// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });

//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const token = jwt.sign({ username: user.username }, 'secretkey', { expiresIn: '1h' });
//   res.json({ token, username: user.username });
// });

// router.get('/profile', authMiddleware, (req, res) => {
//   res.json({ message: 'Profile data', user: req.user });
// });

// module.exports = router;

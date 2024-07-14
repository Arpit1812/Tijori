const User = require('./user'); // Import the User model

// Define an async function to find a user by username
async function findUserByUsername(username) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found');
      return null; // Or throw an error if you prefer
    }
    console.log('Found user:', user);
    return user;
  } catch (err) {
    console.error('Error finding user:', err);
    throw err;
  }
}

module.exports = findUserByUsername;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'], // Username is mandatory
    unique: true, // Each username must be unique in the database
    trim: true,   // Removes any leading/trailing whitespace
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'], // Password is mandatory
    minlength: 6, // Enforce a minimum password length for security
  },
}, {
  // This option automatically adds `createdAt` and `updatedAt` fields
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema);
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Define the routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// This is the crucial line. It must export the router directly.
module.exports = router;
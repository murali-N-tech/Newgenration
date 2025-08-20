const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Public route for anyone to submit a message
router.post('/', submitContactForm);

module.exports = router;

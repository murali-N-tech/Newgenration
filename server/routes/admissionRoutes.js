 
const express = require('express');
const router = express.Router();
const { submitAdmission, getAdmissions } = require('../controllers/admissionController');
const { protect } = require('../middleware/authMiddleware');

// Public route for anyone to submit an application
router.post('/', submitAdmission);

// Protected route for admins to view all applications
router.get('/', protect, getAdmissions);

module.exports = router;
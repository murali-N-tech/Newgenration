 
const express = require('express');
const router = express.Router();
const { getAuth } = require('../controllers/imagekitController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAuth); // Only logged-in admins can get this

module.exports = router;
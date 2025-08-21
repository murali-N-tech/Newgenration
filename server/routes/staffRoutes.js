const express = require('express');
const router = express.Router();
const { getStaff, addStaff, deleteStaff } = require('../controllers/staffController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(getStaff)
    .post(protect, addStaff);

router.delete('/:id', protect, deleteStaff);

module.exports = router;

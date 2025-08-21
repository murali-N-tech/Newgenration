const express = require('express');
const router = express.Router();
const { getFieldTrips, addFieldTrip, deleteFieldTrip } = require('../controllers/fieldTripController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(getFieldTrips)
    .post(protect, addFieldTrip);

router.delete('/:id', protect, deleteFieldTrip);

module.exports = router;

 
const express = require('express');
const router = express.Router();
const { getNews, createNews, deleteNews } = require('../controllers/newsController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(getNews) // Public can view
    .post(protect, createNews); // Private can create

router.route('/:id')
    .delete(protect, deleteNews); // Private can delete

module.exports = router;
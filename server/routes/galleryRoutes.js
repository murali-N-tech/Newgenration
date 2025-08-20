 
const express = require('express');
const router = express.Router();
const { getGalleryImages, addImage, deleteImage } = require('../controllers/galleryController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(getGalleryImages)      // Public can view images
    .post(protect, addImage);   // Private can add images

router.delete('/:id', protect, deleteImage); // Private can delete images

module.exports = router;
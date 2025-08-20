 
const Gallery = require('../models/galleryModel');
const ImageKit = require("imagekit");

// Initialize ImageKit
const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

// @desc    Get all gallery images
// @route   GET /api/gallery
// @access  Public
const getGalleryImages = async (req, res) => {
    try {
        const images = await Gallery.find({}).sort({ createdAt: -1 });
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Add a new image to the gallery
// @route   POST /api/gallery
// @access  Private
const addImage = async (req, res) => {
    const { caption, imageUrl, fileId } = req.body;
    if (!imageUrl || !fileId) {
        return res.status(400).json({ message: 'Image URL and File ID are required' });
    }
    try {
        const newImage = await Gallery.create({ caption, imageUrl, fileId });
        res.status(201).json(newImage);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Delete an image from the gallery
// @route   DELETE /api/gallery/:id
// @access  Private
const deleteImage = async (req, res) => {
    try {
        const image = await Gallery.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        
        // Delete from ImageKit first
        await imagekit.deleteFile(image.fileId);
        
        // Then delete from database
        await image.deleteOne();
        
        res.status(200).json({ id: req.params.id, message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    getGalleryImages,
    addImage,
    deleteImage,
};
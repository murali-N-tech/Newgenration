 
const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    caption: { type: String, default: 'School Photo' },
    imageUrl: { type: String, required: true },
    fileId: { type: String, required: true } // From ImageKit, useful for deletion
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
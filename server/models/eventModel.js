const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: Date, required: true },
    imageUrl: { type: String, required: true } // URL from ImageKit
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
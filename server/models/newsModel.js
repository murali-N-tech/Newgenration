const mongoose = require('mongoose');

// This schema is ONLY for news articles.
const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

// This line exports the 'News' model.
module.exports = mongoose.model('News', newsSchema);
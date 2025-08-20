 
const News = require('../models/newsModel');

// @desc    Get all news
// @route   GET /api/news
// @access  Public
const getNews = async (req, res) => {
    const news = await News.find({}).sort({ date: -1 });
    res.json(news);
};

// @desc    Create news
// @route   POST /api/news
// @access  Private
const createNews = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Please add all fields' });
    }
    const news = await News.create({ title, content });
    res.status(201).json(news);
};

// @desc    Delete news
// @route   DELETE /api/news/:id
// @access  Private
const deleteNews = async (req, res) => {
    const news = await News.findById(req.params.id);
    if (!news) {
        return res.status(404).json({ message: 'News not found' });
    }
    await news.deleteOne();
    res.json({ id: req.params.id });
};

module.exports = { getNews, createNews, deleteNews };
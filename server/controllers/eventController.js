 
const Event = require('../models/eventModel');

// @desc    Get all events
// @route   GET /api/events
// @access  Public
const getEvents = async (req, res) => {
    try {
        const events = await Event.find({}).sort({ eventDate: 1 });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Create a new event
// @route   POST /api/events
// @access  Private
const createEvent = async (req, res) => {
    const { eventName, description, eventDate, imageUrl } = req.body;
    if (!eventName || !description || !eventDate || !imageUrl) {
        return res.status(400).json({ message: 'Please add all fields' });
    }
    try {
        const event = await Event.create({ eventName, description, eventDate, imageUrl });
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Delete an event
// @route   DELETE /api/events/:id
// @access  Private
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        await event.deleteOne();
        res.status(200).json({ id: req.params.id, message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    getEvents,
    createEvent,
    deleteEvent,
};
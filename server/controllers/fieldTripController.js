const FieldTrip = require('../models/fieldTripModel');
const ImageKit = require("imagekit");

// Initialize ImageKit
const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

// @desc    Get all field trips
// @route   GET /api/fieldtrips
// @access  Public
const getFieldTrips = async (req, res) => {
    const trips = await FieldTrip.find({}).sort({ tripDate: 'desc' });
    res.status(200).json(trips);
};

// @desc    Add a new field trip
// @route   POST /api/fieldtrips
// @access  Private
const addFieldTrip = async (req, res) => {
    const { title, description, tripDate, imageUrl, fileId } = req.body;
    if (!title || !description || !tripDate || !imageUrl || !fileId) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newTrip = await FieldTrip.create({ title, description, tripDate, imageUrl, fileId });
    res.status(201).json(newTrip);
};

// @desc    Delete a field trip
// @route   DELETE /api/fieldtrips/:id
// @access  Private
const deleteFieldTrip = async (req, res) => {
    const trip = await FieldTrip.findById(req.params.id);
    if (!trip) {
        return res.status(404).json({ message: 'Field trip not found' });
    }
    
    // Delete image from ImageKit first
    await imagekit.deleteFile(trip.fileId);
    
    // Then delete from database
    await trip.deleteOne();
    
    res.status(200).json({ id: req.params.id });
};

module.exports = { getFieldTrips, addFieldTrip, deleteFieldTrip };

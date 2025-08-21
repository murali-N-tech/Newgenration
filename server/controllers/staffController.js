const Staff = require('../models/staffModel');
const ImageKit = require("imagekit");

// Initialize ImageKit
const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

// @desc    Get all staff members
// @route   GET /api/staff
// @access  Public
const getStaff = async (req, res) => {
    const staff = await Staff.find({}).sort({ createdAt: 'desc' });
    res.status(200).json(staff);
};

// @desc    Add a new staff member
// @route   POST /api/staff
// @access  Private
const addStaff = async (req, res) => {
    const { name, designation, imageUrl, fileId } = req.body;
    if (!name || !designation || !imageUrl || !fileId) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newStaff = await Staff.create({ name, designation, imageUrl, fileId });
    res.status(201).json(newStaff);
};

// @desc    Delete a staff member
// @route   DELETE /api/staff/:id
// @access  Private
const deleteStaff = async (req, res) => {
    const staffMember = await Staff.findById(req.params.id);
    if (!staffMember) {
        return res.status(404).json({ message: 'Staff member not found' });
    }
    
    // Delete image from ImageKit first
    await imagekit.deleteFile(staffMember.fileId);
    
    // Then delete from database
    await staffMember.deleteOne();
    
    res.status(200).json({ id: req.params.id });
};

module.exports = { getStaff, addStaff, deleteStaff };

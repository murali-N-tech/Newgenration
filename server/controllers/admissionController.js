 
const Admission = require('../models/admissionModel');

// @desc    Submit a new admission application
// @route   POST /api/admissions
// @access  Public
const submitAdmission = async (req, res) => {
    const { studentName, dateOfBirth, parentName, contactNumber, email } = req.body;

    if (!studentName || !dateOfBirth || !parentName || !contactNumber || !email) {
        return res.status(400).json({ message: 'Please fill out all required fields' });
    }

    try {
        const admission = await Admission.create({
            studentName,
            dateOfBirth,
            parentName,
            contactNumber,
            email,
        });
        res.status(201).json({ message: 'Admission application submitted successfully!', admission });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get all admission applications
// @route   GET /api/admissions
// @access  Private
const getAdmissions = async (req, res) => {
    try {
        const admissions = await Admission.find({}).sort({ createdAt: -1 });
        res.status(200).json(admissions);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    submitAdmission,
    getAdmissions,
};
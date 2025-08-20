const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    parentName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, default: 'Pending' } // e.g., Pending, Reviewed, Accepted
}, { timestamps: true });

module.exports = mongoose.model('Admission', admissionSchema);
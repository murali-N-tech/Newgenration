const mongoose = require('mongoose');

const fieldTripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tripDate: {
    type: Date,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  fileId: { // From ImageKit, for deletion
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('FieldTrip', fieldTripSchema);

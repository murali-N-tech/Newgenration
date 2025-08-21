const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
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

module.exports = mongoose.model('Staff', staffSchema);

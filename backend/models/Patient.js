const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: String },
  gender: { type: String },
  bloodGroup: { type: String },
  allergies: { type: [String] },
  medications: { type: [String] },
  medicalHistory: { type: [String] },
  emergencyContact: {
    name: { type: String },
    phone: { type: String },
    relationship: { type: String }
  },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);

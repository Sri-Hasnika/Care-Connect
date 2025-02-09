const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  dateTime: { type: String, required: true },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], required: true },
  meetLink: { type: String },
  symptoms: { type: [String] },
  diagnosis: { type: String },
  prescription: { type: String },
  followUp: { type: String },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);

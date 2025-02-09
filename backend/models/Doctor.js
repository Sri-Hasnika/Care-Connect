const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availability: { type: [String], required: true },
  email: { type: String, required: true, unique: true },
  rating: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  experience: { type: Number, required: true },
  languages: { type: [String], required: true },
  consultationFee: { type: Number, required: true },
  education: { type: String, required: true },
  bio: { type: String },
  certifications: { type: [String] },
  publications: { type: [String] },
  specializations: { type: [String] },
  awards: { type: [String] },
  zoomAccessToken: {type: String,},
  zoomRefreshToken: {type: String}
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);

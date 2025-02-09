const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// In routes/doctor.js
router.post('/doctors/login', async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ email: req.body.email });
    if (!doctor || doctor.password !== req.body.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const { password, ...safeDoctor } = doctor.toObject();
    res.json(safeDoctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Create a doctor
router.post('/doctors', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all doctors
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

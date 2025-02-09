const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

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

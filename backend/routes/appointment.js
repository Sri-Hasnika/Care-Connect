const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Create an appointment
router.post('/appointments', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('doctorId').populate('patientId');
    res.status(200).json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

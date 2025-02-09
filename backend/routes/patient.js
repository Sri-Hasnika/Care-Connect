const bcrypt = require('bcrypt');
const express = require('express');
const Patient = require('../models/Patient');
const router = express.Router();


router.post('/patients/login', async (req, res) => {
  try {
    const patient = await Patient.findOne({ email: req.body.email });
    if (!patient || patient.password !== req.body.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const { password, ...safepatient } = patient.toObject();
    res.json(safepatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/patients', async (req, res) => {
  try {

    const { email, password, name, phone } = req.body;
    if (!email || !password || !name || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;

    const patient = new Patient(req.body);
    await patient.save();

    res.status(201).json(patient);
  } catch (err) {
    console.error('Error during patient creation:', err);
    res.status(400).json({ error: err.message });
  }
});



router.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

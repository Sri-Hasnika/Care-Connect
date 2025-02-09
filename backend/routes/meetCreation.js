const express = require('express');
const router = express.Router();
const axios = require('axios');
const Doctor = require('../models/Doctor');

router.post('/meetings', async (req, res) => {
  try {
    const { doctorId, startTime, duration, topic } = req.body;
    const doctor = await Doctor.findById(doctorId);
    
    if (!doctor || !doctor.zoomAccessToken) {
      return res.status(400).json({ error: 'Doctor not authorized with Zoom' });
    }

    const response = await axios.post('https://api.zoom.us/v2/users/me/meetings', {
      topic: topic || 'Medical Consultation',
      type: 2,
      start_time: new Date(startTime).toISOString(),
      duration: duration || 30,
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: false
      }
    }, {
      headers: {
        Authorization: `Bearer ${doctor.zoomAccessToken}`,
        'Content-Type': 'application/json'
      }
    });

    res.json({ meetLink: response.data.join_url });
  } catch (error) {
    console.error('Zoom meeting creation error:', error);
    res.status(500).json({ error: 'Failed to create Zoom meeting' });
  }
});

module.exports = router;
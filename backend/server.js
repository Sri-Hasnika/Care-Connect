const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');
const appointmentRoutes = require('./routes/appointment');
const ZoomOAuthRoutes = require('./routes/oauth');
const zoomMeetCreationRoutes =require('./routes/meetCreation');
const cors = require('cors');
const app = express();
dotenv.config();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api', doctorRoutes);
app.use('/api', patientRoutes);
app.use('/api', appointmentRoutes);


app.use('/api/zoom', ZoomOAuthRoutes);
app.use('/api', zoomMeetCreationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

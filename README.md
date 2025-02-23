# Care Connect

## Overview
An AI-powered health platform that bridges the doctor-patient gap in underserved areas. Built with **Next.js, Node.js (Express), MongoDB, Google AutoML, and Google Cloud Firestore**, it provides AI-driven health insights, virtual consultations via Google Meet, offline functionality, and real-time alerts, ensuring faster and more accessible healthcare.

### 📽️ Project Demo
[Watch Video Explanation](https://drive.google.com/file/d/1J_Ge3uwufNnkRYWrNSPo8UjXyJVR5gXb/view?usp=drivesdk)

## Features
- **AI-Driven Health Insights**: Uses Google AutoML for health diagnostics and personalized insights.
- **Virtual Consultations**: Seamless Google Meet integration for remote doctor-patient interactions.
- **Offline Support**: Ensures users can access essential health data even without an internet connection.
- **Real-Time Alerts**: Notifies users of critical health updates and doctor availability.
- **Cloud Storage**: Secure storage with Google Cloud Firestore.

## Tech Stack
- **Frontend**: Next.js (React-based framework)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB & Google Cloud Firestore
- **AI Services**: Google AutoML for health analytics
- **Video Consultations**: Google Meet API

## Installation & Setup
### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud instance)
- Google Cloud Firestore API setup
- Google AutoML API access

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ai-health-platform.git
   cd ai-health-platform
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   FIRESTORE_API_KEY=your_firestore_api_key
   GOOGLE_MEET_API_KEY=your_google_meet_api_key
   ```
4. Start the backend server:
   ```bash
   npm run server
   ```
5. Start the frontend:
   ```bash
   npm run dev
   ```
6. Access the application at `http://localhost:3000`

---
**Developed with ❤️ for accessible healthcare.**


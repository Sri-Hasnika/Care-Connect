import React, { useState, FormEvent } from 'react';
import { Video, Calendar } from 'lucide-react';
import axios from 'axios';
import { getCurrentUser } from '../utils/auth';

const Consultation = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('9:00 AM');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [meetLink, setMeetLink] = useState('');
  const user = getCurrentUser();

  const timeTo24H = (time: string) => {
    return time; 
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user || user.role !== 'patient') return;
    
    try {
      setLoading(true);
      const dateTime = new Date(`${date}T${timeTo24H(time)}`);
      
      const appointmentRes = await axios.post('/api/appointments', {
        doctorId: 'selected_doctor_id',
        patientId: user.id,
        dateTime,
        status: 'scheduled'
      });

      const meetingRes = await axios.post('/api/meetings', {
        doctorId: 'selected_doctor_id',
        startTime: dateTime.toISOString()
      });


      await axios.patch(`/api/appointments/${appointmentRes.data.id}`, {
        meetLink: meetingRes.data.meetLink
      });

      setMeetLink(meetingRes.data.meetLink);
    } catch (err) {
      setError('Failed to schedule consultation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Virtual Consultation</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <Video className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Start Consultation</h2>
          </div>
          
            <a href="https://calendly.com/devendrayalamaddi/careconnect">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Scehdule the meet
              </button>
            </a>
        </div>

        {/* <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Schedule New Consultation</h2>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Date</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Time</label>
              <select 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? 'Scheduling...' : 'Schedule Consultation'}
            </button>
          </form>
          {meetLink && (
            <div className="mt-4 p-4 bg-green-100 rounded-lg">
              <p className="text-green-700">Meeting created! Link: {meetLink}</p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Consultation;

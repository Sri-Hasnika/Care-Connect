import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';
import ConsultationDetails from '../components/ConsultationDetails';
import ConsultationActivityChart from '../components/ConsultationActivityChart';

const DoctorDashboard = () => {
  const alerts = [
    {
      id: 1,
      type: 'urgent',
      message: 'Patient John Doe reports a worsening cough and shortness of breath.',
      date: '2024-03-15',
      status: 'unread',
      patientName: 'John Doe',
      action: 'Review and take necessary actions'
    },
    {
      id: 2,
      type: 'info',
      message: 'Patient Jane Smith shared symptoms: Headache, nausea. Please confirm next steps.',
      date: '2024-03-14',
      status: 'read',
      patientName: 'Jane Smith',
      action: 'Confirm diagnosis and treatment'
    },
    {
      id: 3,
      type: 'info',
      message: 'Patient Emily White completed a follow-up appointment today.',
      date: '2024-03-14',
      status: 'read',
      patientName: 'Emily White',
      action: 'Check results and next steps'
    },
  ];

  const pendingConsultations = [
    {
      id: 1,
      patientName: 'John Doe',
      time: '10:00 AM',
      date: 'Today',
      status: 'Pending',
      symptoms: 'Fever, cough, sore throat',
      zoomLink: 'https://zoom.us/j/1234567890'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      time: '2:30 PM',
      date: 'Tomorrow',
      status: 'Confirmed',
      symptoms: 'Headache, nausea',
      zoomLink: 'https://zoom.us/j/9876543210'
    }
  ];

  const past7DaysData = [5, 4, 3, 2, 4, 5, 1]; 
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Doctor Dashboard</h1>

      <div className="flex items-center mb-8">
        <Bell className="h-8 w-8 text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Alerts & Notifications</h1>
      </div>

      <div className="flex w-full gap-10">
        <div className="bg-white rounded-lg shadow-md">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 border-b last:border-b-0 ${
                alert.status === 'unread' ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start">
                {alert.type === 'urgent' ? (
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                )}
                <div className="flex-1">
                  <p
                    className={`text-gray-900 ${
                      alert.status === 'unread' ? 'font-semibold' : ''
                    }`}
                  >
                    {alert.message}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Patient: {alert.patientName}</p>
                  <p className="text-sm text-gray-500 mt-1">Action: {alert.action}</p>
                  <p className="text-sm text-gray-500 mt-1">{alert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pending Consultations</h2>
          <div className="space-y-4">
            {pendingConsultations.map((consultation) => (
              <ConsultationDetails key={consultation.id} consultation={consultation} />
            ))}
          </div>
        </div>

      </div>

      <div className="bg-white p-6 rounded-lg shadow-md my-8">
        <h2 className="text-xl font-semibold mb-4">Consultation Activity (Last 7 Days)</h2>
        <ConsultationActivityChart data={past7DaysData} />
      </div>

     
    </div>
  );
};

export default DoctorDashboard;

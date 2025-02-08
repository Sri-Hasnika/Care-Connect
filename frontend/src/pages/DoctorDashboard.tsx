import { Link } from 'react-router-dom';
import { Users, Bell, Video, Calendar } from 'lucide-react';

const DoctorDashboard = () => {
  const pendingConsultations = [
    {
      id: 1,
      patientName: 'John Doe',
      time: '10:00 AM',
      date: 'Today',
      status: 'Pending'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      time: '2:30 PM',
      date: 'Tomorrow',
      status: 'Confirmed'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Doctor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link to="/consultation" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Video className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Start Consultation</h2>
          </div>
          <p className="text-gray-600">Begin virtual consultation with patients</p>
        </Link>

        <Link to="/alerts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Bell className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Patient Alerts</h2>
          </div>
          <p className="text-gray-600">View urgent patient notifications</p>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Today's Schedule</h2>
          </div>
          <p className="text-gray-600">4 consultations scheduled</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Pending Consultations</h2>
        <div className="space-y-4">
          {pendingConsultations.map((consultation) => (
            <div key={consultation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium">{consultation.patientName}</p>
                  <p className="text-sm text-gray-500">
                    {consultation.date} at {consultation.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-2 py-1 text-sm rounded-full ${
                  consultation.status === 'Confirmed' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {consultation.status}
                </span>
                <Link
                  to="/consultation"
                  className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
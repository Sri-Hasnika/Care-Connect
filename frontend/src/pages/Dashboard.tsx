import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Activity, Bell, Video, Brain } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Patient Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link to="/consultation" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Book Consultation</h2>
          </div>
          <p className="text-gray-600">Schedule a virtual consultation with a doctor</p>
        </Link>

        <Link to="/health-insights" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Health Insights</h2>
          </div>
          <p className="text-gray-600">Get AI-powered health analysis</p>
        </Link>

        <Link to="/alerts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Bell className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Alerts</h2>
          </div>
          <p className="text-gray-600">View your health alerts and notifications</p>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Video className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">Virtual Consultation with Dr. Sarah Smith</p>
                <p className="text-sm text-gray-500">Tomorrow at 10:00 AM</p>
              </div>
            </div>
            <Link
              to="/consultation"
              className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700"
            >
              Join Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
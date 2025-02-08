import React from 'react';
import { Bell, AlertTriangle, CheckCircle } from 'lucide-react';

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'urgent',
      message: 'Your recent blood pressure reading is higher than normal',
      date: '2024-03-15',
      status: 'unread',
    },
    {
      id: 2,
      type: 'info',
      message: 'Upcoming appointment reminder: Dr. Smith on March 20th',
      date: '2024-03-14',
      status: 'read',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Bell className="h-8 w-8 text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Alerts & Notifications</h1>
      </div>

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
                <p className="text-sm text-gray-500 mt-1">{alert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
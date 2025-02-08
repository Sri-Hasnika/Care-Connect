import React from 'react';
import { Users, Video, Brain, Wifi } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Virtual Consultations',
    description: 'Connect with healthcare professionals from anywhere',
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'AI-Powered Diagnosis',
    description: 'Get preliminary health insights powered by advanced AI',
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: 'Seamless Communication',
    description: 'Easy-to-use video consultations with your doctor',
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: 'Offline Support',
    description: 'Access your medical records even without internet',
  },
];

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Healthcare at Your
            <span className="text-blue-600"> Fingertips</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Access quality healthcare from anywhere. Connect with doctors, manage your health records,
            and get AI-powered insights - all in one place.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from "react";
import { User } from "lucide-react";

interface Consultation {
    id: number;
    patientName: string;
    time: string;
    date: string;
    status: string;
    symptoms: string;
    zoomLink: string;
  }
  
const ConsultationDetails: React.FC<{ consultation: Consultation }> = ({ consultation }) => {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center">
          <User className="h-5 w-5 text-blue-600 mr-3" />
          <div>
            <p className="font-medium">{consultation.patientName}</p>
            <p className="text-sm text-gray-500">
              {consultation.date} at {consultation.time}
            </p>
            <p className="text-sm text-gray-500">{consultation.symptoms}</p>
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
          <a
            href={consultation.zoomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700"
          >
            Join Meeting
          </a>
        </div>
      </div>
    );
  };

  export default ConsultationDetails;
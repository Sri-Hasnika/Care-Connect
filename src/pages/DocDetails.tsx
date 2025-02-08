import React from "react";
import { useNavigate } from "react-router-dom";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  availability: string[];
  rating: number;
  imageUrl: string;
  experience: number;
  languages: string[];
  consultationFee: number;
  education: string;
  bio?: string;
  certifications?: string[];
  publications?: string[];
  specializations?: string[];
  awards?: string[];
}

interface DocDetailsProps {
  doctor: Doctor;
}

const DocDetails: React.FC<DocDetailsProps> = ({ doctor }) => {
      const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      {/* Doctor Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={doctor.imageUrl}
          alt={doctor.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
          <p className="text-lg text-blue-600 font-medium">{doctor.specialty}</p>
          <p className="text-sm text-gray-600">{doctor.experience} years of experience</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">⭐</span>
            <p className="text-lg font-semibold ml-1">{doctor.rating.toFixed(1)}</p>
          </div>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="mt-6 border-t pt-4">
        {doctor.bio && <p className="text-gray-700 italic">"{doctor.bio}"</p>}

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Languages Spoken</h3>
            <p className="text-gray-600">{doctor.languages.join(", ")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Consultation Fee</h3>
            <p className="text-gray-600">₹{doctor.consultationFee}</p>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700">Availability</h3>
        <p className="text-gray-600">{doctor.availability.join(", ")}</p>
      </div>

      {/* Education & Certifications */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Education</h3>
          <p className="text-gray-600">{doctor.education}</p>
        </div>
        {doctor.certifications && doctor.certifications.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Certifications</h3>
            <ul className="text-gray-600 list-disc ml-5">
              {doctor.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition" onClick={()=>(navigate(`/payment/${doctor.id}`))}>
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default DocDetails;

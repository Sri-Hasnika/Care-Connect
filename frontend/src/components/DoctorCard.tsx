import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Doctor {
  id: string;
  name: string;
  imageUrl: string;
  specialty: string;
  rating: number;
  availability: string[];
  experience: number;
  education: string;
  languages: string[];
  consultationFee: number;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 mx-5"
    >
      <div className="flex items-center gap-4">
        <div className="h-36 w-36 rounded-full overflow-hidden bg-gray-200">
          <img src={doctor.imageUrl} alt={doctor.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{doctor.name}</h3>
          <p className="text-sm text-gray-500">{doctor.specialty}</p>
        </div>
      </div>
      <div className="mt-4 ">
        <div className="flex items-center gap-2 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{doctor.rating} / 5.0</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {doctor.availability.map((day) => (
            <span key={day} className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded-md">{day}</span>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{doctor.experience} years of experience</p>
          <p className="text-sm text-gray-500">{doctor.education}</p>
          <p className="text-sm">Languages: {doctor.languages.join(', ')}</p>
          <p className="text-sm font-medium">Consultation Fee: <span className='font-semibold'>₹{" "}{doctor.consultationFee}</span></p>
        </div>
      </div>
      
      {/* <div className="mt-4">
        <button className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors" onClick={()=>(navigate("/meet"))}>Book Consultation</button>
      </div> */}

      <div className="flex justify-around gap-6 w-full">
        <div className="mt-4">
          <button className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors" onClick={()=>(navigate(`/doc-details/${doctor.id}`))}>View Details</button>
        </div>
        <div className="mt-4">
          <button className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors" onClick={()=>(navigate(`/payment/${doctor.id}`))}>Book Consultation</button>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
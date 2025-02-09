import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Stethoscope, Baby, Bone, Eye, Thermometer, Pill, Smile, Activity } from 'lucide-react';
import { FaTooth } from "react-icons/fa";
import { BsFillLungsFill } from "react-icons/bs";

interface ConsultationReason {
  icon: React.ReactNode;
  label: string;
  specialty: string;
}


const consultationReasons: ConsultationReason[] = [
  { icon: <Heart size={28} />, label: 'Heart Problems', specialty: 'Cardiologist' },
  { icon: <Brain size={28} />, label: 'Mental Health', specialty: 'Psychiatrist' },
  { icon: <Stethoscope size={28} />, label: 'General Checkup', specialty: 'General Physician' },
  { icon: <Baby size={28} />, label: 'Child Health', specialty: 'Pediatrician' },
  { icon: <Bone size={28} />, label: 'Joint Pain', specialty: 'Orthopedic' },
  { icon: <Eye size={28} />, label: 'Eye Care', specialty: 'Ophthalmologist' },
  { icon: <FaTooth size={28} />, label: 'Dental Care', specialty: 'Dentist' },
  { icon: <Thermometer size={28} />, label: 'Fever & Flu', specialty: 'General Physician' },
  { icon: <Pill size={28} />, label: 'Allergies', specialty: 'Allergist' },
  { icon: <Smile size={28} />, label: 'Skin Issues', specialty: 'Dermatologist' },
  { icon: <Activity size={28} />, label: 'Lifestyle Disease', specialty: 'General Physician' },
  { icon: <BsFillLungsFill size={28} />, label: 'Respiratory Issues', specialty: 'Pulmonologist' }
];

interface ConsultationReasonsProps {
  onReasonSelect: (specialty: string) => void;
  selectedSpecialty: string | null;
}

const ConsultationReasons: React.FC<ConsultationReasonsProps> = ({ onReasonSelect, selectedSpecialty }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center mb-6"> What's your reason for consultation? </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {consultationReasons.map((reason, index) => (
          <motion.div
            key={reason.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              className={`w-full h-full min-h-[100px] flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all 
                ${selectedSpecialty === reason.specialty ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => onReasonSelect(reason.specialty)}
            >
              {reason.icon}
              <span className="text-sm text-center">{reason.label}</span>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ConsultationReasons;

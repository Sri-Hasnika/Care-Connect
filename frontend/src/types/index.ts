export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  availability: string[];
  email:string;
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

// export interface Doctor {
//   id: string;
//   name: string;
//   specialty: string;
//   availability: string[];
//   rating: number;
//   imageUrl: string;
//   experience: number;
//   languages: string[];
//   consultationFee: number;
//   education: string;
// }

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: string;
  bloodGroup?: string;
  allergies?: string[];
  medications?: string[];
  medicalHistory?: string[];
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientId: string;
  dateTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  meetLink?: string;
  symptoms?: string[];
  diagnosis?: string;
  prescription?: string;
  followUp?: string;
  notes?: string;
}
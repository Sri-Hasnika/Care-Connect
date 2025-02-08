import { Doctor, Patient, Appointment } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    specialty: 'General Physician',
    availability: ['Mon', 'Wed', 'Fri'],
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 8,
    languages: ['English', 'Mandarin'],
    consultationFee: 100,
    education: 'MD - Stanford University',
    bio: 'Dedicated to providing comprehensive primary care with a focus on preventive medicine.',
    certifications: ['American Board of Internal Medicine', 'Basic Life Support (BLS)'],
    specializations: ['Preventive Medicine', 'Chronic Disease Management', 'Geriatric Care'],
    awards: ['Excellence in Patient Care Award 2023']
  },
  {
    id: '2',
    name: 'Dr. Michael Patel',
    specialty: 'Pediatrician',
    availability: ['Tue', 'Thu', 'Sat'],
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 12,
    languages: ['English', 'Hindi'],
    consultationFee: 120,
    education: 'MBBS - Oxford University',
    bio: 'Passionate about child healthcare and development.',
    certifications: ['American Board of Pediatrics', 'Pediatric Advanced Life Support'],
    specializations: ['Newborn Care', 'Adolescent Medicine', 'Developmental Disorders'],
    awards: ['Best Pediatrician Award 2022']
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Cardiologist',
    availability: ['Mon', 'Tue', 'Thu'],
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 15,
    languages: ['English', 'Spanish'],
    consultationFee: 150,
    education: 'MD - Harvard Medical School',
    bio: 'Specialized in cardiovascular health and heart disease prevention.',
    certifications: ['American Board of Cardiology', 'Advanced Cardiac Life Support'],
    specializations: ['Interventional Cardiology', 'Heart Disease', 'Cardiac Rehabilitation'],
    awards: ['Cardiovascular Research Excellence Award 2023']
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Dermatologist',
    availability: ['Wed', 'Thu', 'Fri'],
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 10,
    languages: ['English'],
    consultationFee: 130,
    education: 'MD - Johns Hopkins University',
    bio: 'Expert in treating various skin conditions and cosmetic dermatology.',
    certifications: ['American Board of Dermatology', 'Cosmetic Dermatology Certification'],
    specializations: ['Medical Dermatology', 'Skin Cancer', 'Cosmetic Procedures'],
    awards: ['Dermatology Innovation Award 2022']
  },
  {
    id: '5',
    name: 'Dr. Aisha Khan',
    specialty: 'Psychiatrist',
    availability: ['Mon', 'Wed', 'Sat'],
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 9,
    languages: ['English', 'Urdu'],
    consultationFee: 140,
    education: 'MD - Yale School of Medicine',
    bio: 'Committed to mental health and wellness through comprehensive psychiatric care.',
    certifications: ['American Board of Psychiatry', 'Cognitive Behavioral Therapy'],
    specializations: ['Mood Disorders', 'Anxiety', 'PTSD Treatment'],
    awards: ['Mental Health Advocacy Award 2023']
  },
  {
    id: '6',
    name: 'Dr. David Lee',
    specialty: 'Ophthalmologist',
    availability: ['Mon', 'Wed', 'Fri'],
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 14,
    languages: ['English', 'Korean'],
    consultationFee: 160,
    education: 'MD - Columbia University',
    bio: 'Dedicated to preserving and improving vision through advanced eye care.',
    certifications: ['American Board of Ophthalmology', 'Laser Surgery Certification'],
    specializations: ['Cataract Surgery', 'Glaucoma Treatment', 'Refractive Surgery'],
    awards: ['Excellence in Eye Care Award 2023']
  },
  {
    id: '7',
    name: 'Dr. Maria Santos',
    specialty: 'Pulmonologist',
    availability: ['Tue', 'Thu', 'Sat'],
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 11,
    languages: ['English', 'Portuguese'],
    consultationFee: 145,
    education: 'MD - UCLA Medical School',
    bio: 'Specialized in respiratory health and pulmonary diseases.',
    certifications: ['American Board of Pulmonology', 'Critical Care Medicine'],
    specializations: ['Respiratory Diseases', 'Sleep Medicine', 'Pulmonary Rehabilitation'],
    awards: ['Respiratory Care Excellence Award 2022']
  },
  {
    id: '8',
    name: 'Dr. John Smith',
    specialty: 'Orthopedic',
    availability: ['Mon', 'Wed', 'Fri'],
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 16,
    languages: ['English'],
    consultationFee: 170,
    education: 'MD - Mayo Clinic School of Medicine',
    bio: 'Expert in treating musculoskeletal conditions and sports injuries.',
    certifications: ['American Board of Orthopedic Surgery', 'Sports Medicine'],
    specializations: ['Joint Replacement', 'Sports Medicine', 'Trauma Surgery'],
    awards: ['Orthopedic Surgery Excellence Award 2023']
  },
  {
    id: '9',
    name: 'Dr. Lisa Chen',
    specialty: 'Allergist',
    availability: ['Tue', 'Thu', 'Sat'],
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&h=300&auto=format&fit=crop',
    experience: 13,
    languages: ['English', 'Mandarin'],
    consultationFee: 135,
    education: 'MD - University of Pennsylvania',
    bio: 'Specialized in diagnosing and treating allergies and immunologic disorders.',
    certifications: ['American Board of Allergy and Immunology', 'Pediatric Allergy'],
    specializations: ['Food Allergies', 'Asthma', 'Immunotherapy'],
    awards: ['Allergy Research Innovation Award 2023']
  }
];

export const sampleCredentials = {
  doctor: {
    email: "doctor@example.com",
    password: "doctor123"
  },
  patient: {
    email: "patient@example.com",
    password: "patient123"
  }
};

export const patients: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1234567890',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    bloodGroup: 'O+',
    allergies: ['Penicillin', 'Peanuts'],
    medications: ['Lisinopril 10mg daily'],
    medicalHistory: ['Hypertension', 'Seasonal Allergies'],
    emergencyContact: {
      name: 'Jane Smith',
      phone: '+1234567891',
      relationship: 'Spouse'
    }
  },
  {
    id: '2',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    phone: '+1234567892',
    dateOfBirth: '1985-08-22',
    gender: 'Female',
    bloodGroup: 'A+',
    allergies: ['Sulfa drugs'],
    medications: ['Synthroid 75mcg daily'],
    medicalHistory: ['Hypothyroidism'],
    emergencyContact: {
      name: 'Robert Wilson',
      phone: '+1234567893',
      relationship: 'Brother'
    }
  }
];

export const appointments: Appointment[] = [
  {
    id: '1',
    doctorId: '1',
    patientId: '1',
    dateTime: '2025-04-15T10:00:00',
    status: 'scheduled',
    meetLink: 'https://meet.google.com/abc-defg-hij',
    symptoms: ['Fever', 'Cough', 'Fatigue'],
    notes: 'Patient reports symptoms starting 3 days ago'
  },
  {
    id: '2',
    doctorId: '2',
    patientId: '2',
    dateTime: '2025-04-16T14:30:00',
    status: 'scheduled',
    meetLink: 'https://meet.google.com/xyz-uvw-rst',
    symptoms: ['Headache', 'Dizziness'],
    notes: 'Follow-up appointment for previous consultation'
  }
];
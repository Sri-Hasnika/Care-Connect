import React,{useState, useMemo} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from './utils/auth';
import Header from './components/Header';
import { doctors } from './data/mockData';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import ConsultationReasons from './components/Consultation.tsx';
import HealthInsights from './pages/HealthInsights';
import Alerts from './pages/Alerts';
import DoctorCard from './components/DoctorCard.tsx';
import DocDetailsWrapper from './pages/DocDetailsWrapper.tsx';
import PaymentWrapper from './pages/PaymentWrapper.tsx';
import Consultation from './pages/Consultation.tsx';

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = getCurrentUser();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

// Role-specific Route component
const RoleRoute = ({ children, allowedRole }: { children: React.ReactNode, allowedRole: 'patient' | 'doctor' }) => {
  const user = getCurrentUser();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user.role !== allowedRole) {
    return <Navigate to={user.role === 'doctor' ? '/doctor-dashboard' : '/dashboard'} />;
  }
  return <>{children}</>;
};

function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const filteredDoctors = useMemo(() => {
    if (!selectedSpecialty) return doctors;
    return doctors.filter(doctor => doctor.specialty === selectedSpecialty);
  }, [selectedSpecialty]);
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Patient Routes */}
          <Route path="/dashboard" element={
            <RoleRoute allowedRole="patient">
              <Dashboard />
            </RoleRoute>
          } />
          
          {/* Doctor Routes */}
          <Route path="/doctor-dashboard" element={
            <RoleRoute allowedRole="doctor">
              <DoctorDashboard />
            </RoleRoute>
          } />
          
          {/* Protected Routes for both roles */}
          <Route path="/consultation" element={
            <ProtectedRoute>
              <ConsultationReasons 
                onReasonSelect={setSelectedSpecialty}
                selectedSpecialty={selectedSpecialty}
              />
              {selectedSpecialty && (
          <div className="mb-6">
            <button
              onClick={() => setSelectedSpecialty(null)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Show all specialties
            </button>
          </div>
        )}

        {filteredDoctors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No doctors found for this specialty</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
            {filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />
            ))}
          </div>
        )}
            </ProtectedRoute>
          } />
          <Route path="/health-insights" element={
            <ProtectedRoute>
              <HealthInsights />
            </ProtectedRoute>
          } />
          <Route path="/alerts" element={
            <ProtectedRoute>
              <Alerts />
            </ProtectedRoute>
          } />
          <Route path="/meet" element={
            <ProtectedRoute>
              <Consultation />
            </ProtectedRoute>
          } />
          <Route path="/payment/:id" element={
            <ProtectedRoute>
              {/* <Consultation /> */}
              <PaymentWrapper />
            </ProtectedRoute>
          } />
          <Route path="/doc-details/:id" element={
            <ProtectedRoute>
              <DocDetailsWrapper />
            </ProtectedRoute>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
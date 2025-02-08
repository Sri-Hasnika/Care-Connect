import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Stethoscope, LogOut } from 'lucide-react';
import { getCurrentUser, logout } from '../utils/auth';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">CareConnect Lite</span>
          </Link>
          <nav className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <span className="text-gray-600">
                  Welcome, {currentUser.name}
                </span>
                <Link
                  to={currentUser.role === 'doctor' ? '/doctor-dashboard' : '/dashboard'}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : !isAuthPage && (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
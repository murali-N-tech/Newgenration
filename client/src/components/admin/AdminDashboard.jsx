import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, {user ? user.username : 'Admin'}!
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Logout
          </button>
        </div>
        
        {/* Navigation Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Manage News */}
          <Link 
            to="/admin/manage-news" 
            className="bg-blue-100 p-6 rounded-lg text-center hover:bg-blue-200 transition"
          >
            <h3 className="font-bold text-lg text-blue-800">Manage News</h3>
          </Link>

          {/* Manage Events */}
          <Link 
            to="/admin/manage-events" 
            className="bg-green-100 p-6 rounded-lg text-center hover:bg-green-200 transition"
          >
            <h3 className="font-bold text-lg text-green-800">Manage Events</h3>
          </Link>

          {/* Manage Gallery */}
          <Link 
            to="/admin/manage-gallery" 
            className="bg-yellow-100 p-6 rounded-lg text-center hover:bg-yellow-200 transition"
          >
            <h3 className="font-bold text-lg text-yellow-800">Manage Gallery</h3>
          </Link>

          {/* Add Admissions link later */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

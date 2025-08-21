import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, {user ? user.username : 'Admin'}!
          </h1>
          <p className="text-gray-500">Select an option below to manage your website's content.</p>
        </div>
        
        {/* Navigation Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/admin/manage-news" className="bg-blue-100 p-6 rounded-lg text-center hover:bg-blue-200 transition-colors duration-300">
            <h3 className="font-bold text-lg text-blue-800">Manage News</h3>
          </Link>
          
          <Link to="/admin/manage-events" className="bg-green-100 p-6 rounded-lg text-center hover:bg-green-200 transition-colors duration-300">
            <h3 className="font-bold text-lg text-green-800">Manage Events</h3>
          </Link>
          
          <Link to="/admin/manage-gallery" className="bg-yellow-100 p-6 rounded-lg text-center hover:bg-yellow-200 transition-colors duration-300">
            <h3 className="font-bold text-lg text-yellow-800">Manage Gallery</h3>
          </Link>

          <Link to="/admin/view-admissions" className="bg-purple-100 p-6 rounded-lg text-center hover:bg-purple-200 transition-colors duration-300">
            <h3 className="font-bold text-lg text-purple-800">View Admissions</h3>
          </Link>

          
          <Link to="/admin/manage-staff" className="bg-indigo-100 p-6 rounded-lg text-center hover:bg-indigo-200 transition-colors duration-300">
            <h3 className="font-bold text-lg text-indigo-800">Manage Staff</h3>
          </Link>
          <Link to="/admin/manage-fieldtrips" className="bg-teal-100 p-6 rounded-lg text-center hover:bg-teal-200 transition-colors duration-300">
            <h3 className="font-bold text-lg text-teal-800">Manage Field Trips</h3>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

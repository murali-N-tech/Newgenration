import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // Show a loading indicator while checking for user session
    return <div>Loading...</div>;
  }

  if (!user) {
    // If not logged in, redirect to the login page, saving the current location
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // If logged in, render the component that was passed as children
  return children;
}

export default PrivateRoute;
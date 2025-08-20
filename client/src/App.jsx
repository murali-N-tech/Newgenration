import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- Context and Route Protection ---
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

// --- Page Components ---
// Public Facing Page
import MainWebsite from './pages/MainWebsite';

// Admin Pages
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageNews from './pages/admin/ManageNews.jsx';
import ManageEvents from './pages/admin/ManageEvents.jsx';
import ManageGallery from './pages/admin/ManageGallery.jsx';
import ViewAdmissions from './pages/admin/ViewAdmissions.jsx';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* ============================================= */}
        {/* ============== PUBLIC ROUTES ============== */}
        {/* ============================================= */}
        <Route path="/" element={<MainWebsite />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* ============================================= */}
        {/* ============== PRIVATE ADMIN ROUTES ========= */}
        {/* ============================================= */}
        
        <Route 
          path="/admin/dashboard" 
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/admin/manage-news" 
          element={
            <PrivateRoute>
              <ManageNews />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/admin/manage-events" 
          element={
            <PrivateRoute>
              <ManageEvents />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/admin/manage-gallery" 
          element={
            <PrivateRoute>
              <ManageGallery />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/admin/view-admissions" 
          element={
            <PrivateRoute>
              <ViewAdmissions />
            </PrivateRoute>
          } 
        />

      </Routes>
    </AuthProvider>
  );
}

export default App;

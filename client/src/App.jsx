import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- Context and Route Protection ---
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

// --- Page Components ---
import MainWebsite from './pages/MainWebsite';
import AdminLoginPage from './pages/AdminLoginPage';

// --- Admin Layout and Pages ---
import AdminLayout from './components/admin/AdminLayout.jsx';
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
        {/* === PRIVATE ADMIN ROUTES W/ SHARED LAYOUT === */}
        {/* ============================================= */}
        <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          {/* Child routes will render inside AdminLayout's <Outlet /> */}
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-news" element={<ManageNews />} />
          <Route path="manage-events" element={<ManageEvents />} />
          <Route path="manage-gallery" element={<ManageGallery />} />
          <Route path="view-admissions" element={<ViewAdmissions />} />
        </Route>

      </Routes>
    </AuthProvider>
  );
}

export default App;

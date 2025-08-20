import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../common/AdminNavbar';
import Footer from '../common/Footer';

function AdminLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <AdminNavbar />
      <main className="flex-grow">
        {/* The specific admin page content will be rendered here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// This line is likely missing from your file
export default AdminLayout;
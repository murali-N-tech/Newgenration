 
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-bold text-lg mb-2">Springfield Public School</p>
        <p className="text-gray-400 mb-4">123 Education Lane, Learning City, 12345</p>
        <div className="flex justify-center space-x-4 mb-4">
          {/* Replace # with your actual social media links */}
          <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Springfield Public School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
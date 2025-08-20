 
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About Us' },
  { to: 'news', label: 'News' },
  { to: 'events', label: 'Events' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'admissions', label: 'Admissions' },
];

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* School Logo */}
          <div className="text-2xl font-bold text-blue-600">
            Springfield Public
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70} // Adjusts scroll position (makes space for the sticky nav)
                duration={500}
                className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer"
                activeClass="text-blue-600 border-b-2 border-blue-600"
              >
                {link.label}
              </ScrollLink>
            ))}
          </div>

          {/* Admin Login Button */}
          <div className="hidden md:block">
            <RouterLink
              to="/admin/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Admin Login
            </RouterLink>
          </div>

          {/* Mobile Menu Button (functionality can be added later) */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
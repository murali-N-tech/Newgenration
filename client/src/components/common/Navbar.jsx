import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// Define the navigation links
const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About Us" },
  { to: "news", label: "News" },
  { to: "events", label: "Events" },
  { to: 'field-trips', label: 'Field Trips' },
  { to: "gallery", label: "Gallery" },
  { to: 'staff', label: 'Our Staff' },
  { to: "admissions", label: "Admissions" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set 'isScrolled' to true if user scrolls past 100px
      setIsScrolled(scrollTop > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300">
      <div
        className="shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519750510107-1602495d4e11?q=80&w=2670&auto=format&fit=crop')`,
        }}
      >
        {/* Top Section: Logo and School Name (this section collapses on scroll) */}
        <div
          className={`
          bg-gradient-to-r from-blue-800 to-blue-900 bg-opacity-90
          transition-all duration-500 ease-in-out transform origin-top
          ${
            isScrolled
              ? "scale-y-0 h-0 opacity-0 py-0"
              : "scale-y-100 h-auto opacity-100 py-4"
          }
        `}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* School Logo - now on the left */}
            <img
              src="https://res.cloudinary.com/dkpjimiip/image/upload/v1755677672/new_hci7by.png"
              alt="New Generation School Logo"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover transition-transform duration-300 hover:scale-110"
            />
            {/* School Name - now on the right */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide text-right">
              New Generation School
            </h1>
          </div>
        </div>

        {/* Bottom Section: Navigation Links (this section stays sticky) */}
        <div
          className={`
          container mx-auto px-4
          ${isScrolled ? "py-4" : "py-2 border-t border-blue-700"}
        `}
        >
          <div className="flex justify-between items-center">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  // Offset accounts for the combined height and its change on scroll
                  offset={isScrolled ? -64 : -200}
                  duration={500}
                  className={`
                    px-4 py-2 rounded-full font-semibold uppercase cursor-pointer transition-colors duration-300
                    bg-white text-blue-800
                    hover:bg-blue-800 hover:text-white
                    activeClass="bg-blue-800 text-white"
                  `}
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>

            {/* Admin Login Button for Desktop */}
            <div className="hidden md:block">
              <RouterLink
                to="/admin/login"
                className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Admin Login
              </RouterLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center text-lg font-medium py-2 px-4 transition-colors duration-300 bg-white text-blue-800 hover:bg-blue-800 hover:text-white"
                activeClass="bg-blue-800 text-white"
              >
                {link.label}
              </ScrollLink>
            ))}
            <RouterLink
              to="/admin/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center text-lg font-medium bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition duration-300 mt-2"
            >
              Admin Login
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

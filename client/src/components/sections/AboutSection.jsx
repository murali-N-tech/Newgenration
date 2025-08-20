import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

function AboutSection() {
  const schoolImageUrl =
    "https://res.cloudinary.com/dlexfctt4/image/upload/v1755686007/Untitled_design_ebzk8a.png";

  return (
    <SectionWrapper id="about" title="About Our School">
      <style>
        {`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(5deg); }
          50% { transform: translate(0, 15px) rotate(-5deg); }
          75% { transform: translate(-15px, 5px) rotate(10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes pulse-float {
          0% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          50% { transform: scale(1.1) translate(5px, 5px); opacity: 0.7; }
          100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
        }
        .animate-float-1 {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float 12s ease-in-out infinite reverse;
        }
        .animate-float-3 {
          animation: float 14s ease-in-out infinite;
        }
        .animate-pulse-float {
          animation: pulse-float 5s ease-in-out infinite;
        }
        `}
      </style>
      <div className="flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        {/* Abstract shapes with animation */}
        <div className="absolute w-64 h-64 -top-20 -left-20 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-float-1"></div>
        <div className="absolute w-80 h-80 -bottom-20 -right-20 bg-gradient-to-tl from-pink-500 to-red-500 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-float-2"></div>
        <div className="absolute w-56 h-56 top-1/4 left-1/4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-float-3"></div>

        {/* Image Column with multi-colored background and layered design */}
        <div
          className="md:w-1/2 p-6 rounded-3xl shadow-2xl relative z-10 
                     bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 transform hover:scale-105 transition-transform duration-500"
        >
          {/* Main image placed on top of the shapes */}
          <img
            src={schoolImageUrl}
            alt="New Generation School Campus"
            className="rounded-2xl w-full h-auto relative z-20 opacity-90"
            style={{ backgroundColor: "white" }}
          />
        </div>

        {/* Text Content Column with unique glassmorphism effect */}
        <div className="md:w-1/2 relative z-10 p-8 rounded-3xl shadow-2xl bg-white bg-opacity-70 backdrop-blur-lg transform hover:scale-105 transition-transform duration-500">
          <p className="text-gray-800 text-lg mb-4">
            At New Generation School, we are dedicated to providing a nurturing
            and challenging environment that encourages a love for learning. Our
            mission is to develop well-rounded individuals who are confident,
            creative, and compassionate.
          </p>
          <p className="text-gray-800 text-lg">
            With a focus on academic excellence, character development, and
            community involvement, we prepare our students to become responsible
            citizens and leaders of tomorrow.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center text-gray-800 font-semibold">
              <span className="text-blue-500 mr-3">🚀</span>
              State-of-the-Art Facilities
            </li>
            <li className="flex items-center text-gray-800 font-semibold">
              <span className="text-blue-500 mr-3">💡</span>
              Experienced & Passionate Faculty
            </li>
            <li className="flex items-center text-gray-800 font-semibold">
              <span className="text-blue-500 mr-3">🌱</span>
              Holistic Development Programs
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;

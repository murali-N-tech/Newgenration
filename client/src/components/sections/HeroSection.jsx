import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function HeroSection() {
  // Replace this with your school's actual hero image URL
  const heroImageUrl = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop';

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
          Welcome to Springfield Public School
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
          Nurturing young minds for a brighter future through excellence in education.
        </p>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Learn More
        </ScrollLink>
      </div>
    </section>
  );
}

export default HeroSection;
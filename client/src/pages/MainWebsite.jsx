import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import NewsSection from '../components/sections/NewsSection';
import EventsSection from '../components/sections/EventsSection';
import GallerySection from '../components/sections/GallerySection';
import AdmissionsSection from '../components/sections/AdmissionsSection'; // Import the final section
import Footer from '../components/common/Footer';

function MainWebsite() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <NewsSection />
        <EventsSection />
        <GallerySection />
        <AdmissionsSection />
      </main>
      <Footer />
    </div>
  );
}

export default MainWebsite;
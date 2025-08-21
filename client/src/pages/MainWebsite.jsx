import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import NewsSection from '../components/sections/NewsSection';
import EventsSection from '../components/sections/EventsSection';
import GallerySection from '../components/sections/GallerySection';
import AdmissionsSection from '../components/sections/AdmissionsSection'; // Import the final section
import Footer from '../components/common/Footer';
import ContactSection from '../components/sections/ContactSection';
import StaffSection from '../components/sections/StaffSection';
import FieldTripsSection from '../components/sections/FieldTripsSection'; // Import the field trips section

function MainWebsite() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
        <NewsSection />
        <EventsSection />
        <FieldTripsSection />
        <GallerySection />
        <StaffSection />
        <AdmissionsSection />

      </main>
      <Footer />
    </div>
  );
}

export default MainWebsite;
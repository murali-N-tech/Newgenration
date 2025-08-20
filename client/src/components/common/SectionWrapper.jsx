import React from 'react';

function SectionWrapper({ children, id, title }) {
  return (
    <section id={id} className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {title}
        </h2>
        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
import React from 'react';

// Define the available color schemes for the background and text
const colorSchemes = {
  white: 'bg-white text-gray-800',
  blue: 'bg-blue-100 text-blue-900',
  gradient: 'bg-gradient-to-br from-blue-50 to-blue-200 text-blue-900',
};

// Define the available title styles
const titleStyles = {
  center: 'text-3xl md:text-4xl font-bold text-center mb-12',
  left: 'text-3xl md:text-4xl font-bold text-left mb-12',
  decorated: 'text-3xl md:text-4xl font-extrabold text-center relative pb-2 mb-12 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:rounded-full',
};

function SectionWrapper({ children, id, title, colorScheme = 'white', titleStyle = 'center' }) {
  // Validate props to ensure a valid color scheme and title style are used
  const appliedColorScheme = colorSchemes[colorScheme] || colorSchemes.white;
  const appliedTitleStyle = titleStyles[titleStyle] || titleStyles.center;

  return (
    <section id={id} className={`w-full py-16 md:py-24 transition-colors duration-500 ${appliedColorScheme}`}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className={`text-gray-800 ${appliedTitleStyle}`}>
          {title}
        </h2>
        {/* Section Content */}
        <div className="flex flex-col items-center">
          {children}
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper;

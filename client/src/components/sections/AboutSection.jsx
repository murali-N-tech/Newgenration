import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

function AboutSection() {
  // Replace with an image of your school
  const schoolImageUrl = 'https://images.unsplash.com/photo-1592928929948-9c1c4d929d29?q=80&w=1974&auto=format&fit=crop';

  return (
    <SectionWrapper id="about" title="About Our School">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Column */}
        <div className="md:w-1/2">
          <img 
            src={schoolImageUrl} 
            alt="Springfield Public School Campus" 
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>

        {/* Text Content Column */}
        <div className="md:w-1/2">
          <p className="text-gray-600 text-lg mb-4">
            At Springfield Public School, we are dedicated to providing a nurturing and challenging environment that encourages a love for learning. Our mission is to develop well-rounded individuals who are confident, creative, and compassionate.
          </p>
          <p className="text-gray-600 text-lg">
            With a focus on academic excellence, character development, and community involvement, we prepare our students to become responsible citizens and leaders of tomorrow.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center text-gray-700">
              <span className="text-blue-500 mr-3">✔</span>
              State-of-the-Art Facilities
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-blue-500 mr-3">✔</span>
              Experienced & Passionate Faculty
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-blue-500 mr-3">✔</span>
              Holistic Development Programs
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
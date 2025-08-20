 
import React from 'react';

function NewsCard({ title, content, date }) {
  
  // Helper function to format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{formatDate(date)}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {/* Truncate long content for the card view */}
          {content.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
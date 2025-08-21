import React from 'react';

function NewsCard({ title, content, date }) {
  
  // Helper function to format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#008080] flex flex-col">
      <div className="p-6 flex-grow">
        <p className="text-sm text-gray-500 mb-2">{formatDate(date)}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-3 h-14">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {content.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
}

export default NewsCard;

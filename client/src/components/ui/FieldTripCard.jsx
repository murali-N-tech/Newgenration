import React from 'react';

function FieldTripCard({ title, description, tripDate, imageUrl }) {
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200 hover:border-teal-500">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{formatDate(tripDate)}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">{title}</h3>
        <p className="text-gray-600 text-sm h-16">{description.substring(0, 90)}...</p>
      </div>
    </div>
  );
}

export default FieldTripCard;

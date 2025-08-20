 
import React from 'react';

function EventCard({ eventName, eventDate, imageUrl }) {
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.toLocaleDateString(undefined, { day: '2-digit' });
    const month = date.toLocaleDateString(undefined, { month: 'short' });
    return { day, month };
  };

  const { day, month } = formatDate(eventDate);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={eventName} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-4 left-4 bg-white text-blue-600 rounded-md p-2 text-center shadow-md">
          <p className="text-2xl font-bold">{day}</p>
          <p className="text-sm font-semibold uppercase">{month}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{eventName}</h3>
      </div>
    </div>
  );
}

export default EventCard;
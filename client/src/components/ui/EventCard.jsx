import React from 'react';

function EventCard({ eventName, eventDate, imageUrl, description }) {
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.toLocaleDateString(undefined, { day: '2-digit' });
    const month = date.toLocaleDateString(undefined, { month: 'short' }).toUpperCase();
    return { day, month };
  };

  const { day, month } = formatDate(eventDate);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200 hover:border-teal-500">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={eventName} 
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-0 left-0 bg-teal-500 text-white p-3 text-center rounded-br-lg">
          <p className="text-2xl font-bold">{day}</p>
          <p className="text-sm font-semibold">{month}</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 truncate">{eventName}</h3>
      </div>
    </div>
  );
}

export default EventCard;

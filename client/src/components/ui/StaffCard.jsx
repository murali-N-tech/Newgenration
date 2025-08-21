import React from 'react';

function StaffCard({ name, designation, imageUrl }) {
  return (
    <div className="text-center p-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
      />
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-500">{designation}</p>
    </div>
  );
}

export default StaffCard;

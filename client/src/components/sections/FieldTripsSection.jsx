import React, { useState, useEffect } from 'react';
import FieldTripCard from '../ui/FieldTripCard';
import SkeletonCard from '../ui/SkeletonCard';
import { fetchFieldTrips } from '../../api/apiService';

function FieldTripsSection() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrips = async () => {
      setLoading(true);
      try {
        const tripData = await fetchFieldTrips();
        setTrips(tripData.slice(0, 4)); // Show the 4 most recent trips
      } catch (error) {
        console.error("Failed to load field trips", error);
      } finally {
        setLoading(false);
      }
    };

    getTrips();
  }, []);

  return (
    <section
      id="field-trips"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-100 to-pink-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00008B] mb-12 font-display">
          Field Trips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} className="h-80" />
            ))
          ) : trips.length > 0 ? (
            trips.map((trip) => (
              <FieldTripCard
                key={trip._id}
                title={trip.title}
                description={trip.description}
                tripDate={trip.tripDate}
                imageUrl={trip.imageUrl}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No field trips have been posted yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FieldTripsSection;

import React, { useState, useEffect } from 'react';
import EventCard from '../ui/EventCard';
import SkeletonCard from '../ui/SkeletonCard';
import { fetchEvents } from '../../api/apiService';

function EventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const eventData = await fetchEvents();
        setEvents(eventData.slice(0, 4));
      } catch (error) {
        console.error("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  return (
    <section id="events" className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00008B] mb-12 font-display">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} className="h-72" />
            ))
          ) : events.length > 0 ? (
            events.map((event) => (
              <EventCard
                key={event._id}
                eventName={event.eventName}
                eventDate={event.eventDate}
                imageUrl={event.imageUrl}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4">No upcoming events found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;

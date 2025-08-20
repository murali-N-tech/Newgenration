import React, { useState, useEffect } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import EventCard from '../ui/EventCard';
import { fetchEvents } from '../../api/apiService';

function EventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventData = await fetchEvents();
        // Display the next 4 upcoming events
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
    <SectionWrapper id="events" title="Upcoming Events">
      {loading ? (
        <p className="text-center text-gray-500">Loading events...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.length > 0 ? (
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
      )}
    </SectionWrapper>
  );
}

export default EventsSection;
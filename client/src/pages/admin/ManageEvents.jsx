import React, { useState, useEffect } from 'react';
import { fetchEvents, createEvent, deleteEvent } from '../../api/apiService';
import ImageUploader from '../../components/admin/ImageUploader';
import { Link } from 'react-router-dom'; // Corrected import

function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ eventName: '', description: '', eventDate: '' });
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  // Fetch all events on component load
  const loadEvents = async () => {
    const data = await fetchEvents();
    setEvents(data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageSuccess = (res) => {
    setImageUrl(res.url); // Save the image URL from ImageKit
    setMessage('Image uploaded successfully!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl) {
      setMessage('Please upload an image for the event.');
      return;
    }
    try {
      await createEvent({ ...formData, imageUrl });
      setMessage('Event created successfully!');
      setFormData({ eventName: '', description: '', eventDate: '' });
      setImageUrl('');
      loadEvents(); // Refresh list
    } catch (error) {
      setMessage('Failed to create event.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      await deleteEvent(id);
      setMessage('Event deleted successfully!');
      loadEvents();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/admin/dashboard" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Dashboard</Link>
      <h1 className="text-2xl font-bold mb-4">Manage Events</h1>

      {/* Create Event Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Event Name</label>
            <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows="3" required></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Event Date</label>
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          {/* Image Uploader */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Event Image</label>
            <ImageUploader onSuccess={handleImageSuccess} onError={(err) => console.log(err)} />
            {imageUrl && <img src={imageUrl} alt="Preview" className="mt-4 w-32 h-auto rounded" />}
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Event</button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>

      {/* Existing Events List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Events</h2>
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event._id} className="flex justify-between items-center p-2 border-b">
              <span>{event.eventName}</span>
              <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManageEvents;
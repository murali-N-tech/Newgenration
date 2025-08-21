import React, { useState, useEffect } from 'react';
import { fetchFieldTrips, addFieldTrip, deleteFieldTrip } from '../../api/apiService';
import ImageUploader from '../../components/admin/ImageUploader';
import { Link } from 'react-router-dom';

function ManageFieldTrips() {
  const [trips, setTrips] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', tripDate: '' });
  const [imageData, setImageData] = useState({ imageUrl: '', fileId: '' });
  const [message, setMessage] = useState('');

  const loadTrips = async () => {
    const data = await fetchFieldTrips();
    setTrips(data);
  };

  useEffect(() => {
    loadTrips();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageSuccess = (res) => {
    setImageData({ imageUrl: res.url, fileId: res.fileId });
    setMessage('Image uploaded successfully!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageData.imageUrl) {
      setMessage('Please upload an image for the field trip.');
      return;
    }
    try {
      await addFieldTrip({ ...formData, ...imageData });
      setMessage('Field trip added successfully!');
      setFormData({ title: '', description: '', tripDate: '' });
      setImageData({ imageUrl: '', fileId: '' });
      loadTrips();
    } catch (error) {
      setMessage('Failed to add field trip.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this field trip?')) {
      await deleteFieldTrip(id);
      setMessage('Field trip deleted successfully!');
      loadTrips();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/admin/dashboard" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Dashboard</Link>
      <h1 className="text-2xl font-bold mb-4">Manage Field Trips</h1>

      {/* Add Field Trip Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Field Trip</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows="3" required></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Trip Date</label>
            <input type="date" name="tripDate" value={formData.tripDate} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Photo</label>
            <ImageUploader onSuccess={handleImageSuccess} />
            {imageData.imageUrl && <img src={imageData.imageUrl} alt="Preview" className="mt-4 w-32 h-auto rounded" />}
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Field Trip</button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>

      {/* Existing Field Trips List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Field Trips</h2>
        <ul className="space-y-4">
          {trips.map((trip) => (
            <li key={trip._id} className="flex justify-between items-center p-2 border-b">
              <span>{trip.title}</span>
              <button onClick={() => handleDelete(trip._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManageFieldTrips;

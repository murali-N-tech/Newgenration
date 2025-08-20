import React, { useState, useEffect } from 'react';
import { fetchGallery, addGalleryImage, deleteGalleryImage } from '../../api/apiService';
import ImageUploader from '../../components/admin/ImageUploader';
import { Link } from 'react-router-dom';

function ManageGallery() {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  // Function to load all gallery images
  const loadGallery = async () => {
    const data = await fetchGallery();
    setImages(data);
  };

  useEffect(() => {
    loadGallery();
  }, []);

  // This function is called after ImageKit successfully uploads the file
  const handleImageSuccess = async (res) => {
    try {
      // Now, save the image URL and fileId to our own database
      const imageData = {
        imageUrl: res.url,
        fileId: res.fileId,
        caption: 'School Gallery Photo' // You can add a caption input field if you like
      };
      await addGalleryImage(imageData);
      setMessage('Photo added to gallery successfully!');
      loadGallery(); // Refresh the gallery
    } catch (error) {
      setMessage('Failed to save image to the gallery.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      await deleteGalleryImage(id);
      setMessage('Photo deleted successfully!');
      loadGallery();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/admin/dashboard" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Dashboard</Link>
      <h1 className="text-2xl font-bold mb-4">Manage Gallery</h1>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-2">Upload New Photo</h2>
        <p className="text-sm text-gray-500 mb-4">Select a file and the upload will begin automatically. The photo will be added to the gallery upon successful upload.</p>
        <ImageUploader onSuccess={handleImageSuccess} />
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>

      {/* Existing Photos Grid */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image) => (
            <div key={image._id} className="relative group">
              <img src={image.imageUrl} alt={image.caption} className="w-full h-40 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <button 
                  onClick={() => handleDelete(image._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageGallery;
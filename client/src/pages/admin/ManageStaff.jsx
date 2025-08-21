import React, { useState, useEffect } from 'react';
import { fetchStaff, addStaffMember, deleteStaffMember } from '../../api/apiService';
import ImageUploader from '../../components/admin/ImageUploader';
import { Link } from 'react-router-dom';

function ManageStaff() {
  const [staffList, setStaffList] = useState([]);
  const [formData, setFormData] = useState({ name: '', designation: '' });
  const [imageData, setImageData] = useState({ imageUrl: '', fileId: '' });
  const [message, setMessage] = useState('');

  const loadStaff = async () => {
    const data = await fetchStaff();
    setStaffList(data);
  };

  useEffect(() => {
    loadStaff();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageSuccess = (res) => {
    setImageData({ imageUrl: res.url, fileId: res.fileId });
    setMessage('Image uploaded successfully! Please fill out the details and save.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageData.imageUrl) {
      setMessage('Please upload an image first.');
      return;
    }
    try {
      await addStaffMember({ ...formData, ...imageData });
      setMessage('Staff member added successfully!');
      setFormData({ name: '', designation: '' });
      setImageData({ imageUrl: '', fileId: '' });
      loadStaff();
    } catch (error) {
      setMessage('Failed to add staff member.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this staff member?')) {
      await deleteStaffMember(id);
      setMessage('Staff member deleted successfully!');
      loadStaff();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/admin/dashboard" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Dashboard</Link>
      <h1 className="text-2xl font-bold mb-4">Manage Staff</h1>

      {/* Add Staff Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Staff Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Staff Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Designation</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Photo</label>
            <ImageUploader onSuccess={handleImageSuccess} />
            {imageData.imageUrl && <img src={imageData.imageUrl} alt="Preview" className="mt-4 w-24 h-24 object-cover rounded-full" />}
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Staff Member</button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>

      {/* Existing Staff List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Staff</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {staffList.map((staff) => (
                <div key={staff._id} className="text-center">
                    <img src={staff.imageUrl} alt={staff.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-2" />
                    <h3 className="font-bold">{staff.name}</h3>
                    <p className="text-sm text-gray-500">{staff.designation}</p>
                    <button onClick={() => handleDelete(staff._id)} className="text-xs text-red-500 mt-1">Delete</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ManageStaff;

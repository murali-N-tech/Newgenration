import React, { useState, useEffect } from 'react';
import { getAdmissions } from '../../api/apiService';
import { Link } from 'react-router-dom';

function ViewAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAdmissions = async () => {
      try {
        const data = await getAdmissions();
        setAdmissions(data);
      } catch (error) {
        console.error("Failed to load admissions", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadAdmissions();
  }, []);
  
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  return (
    <div className="container mx-auto p-4">
      <Link to="/admin/dashboard" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Dashboard</Link>
      <h1 className="text-2xl font-bold mb-4">View Admission Applications</h1>

      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        {isLoading ? (
          <p>Loading applications...</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Student Name</th>
                <th className="p-2">Date of Birth</th>
                <th className="p-2">Parent Name</th>
                <th className="p-2">Contact</th>
                <th className="p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((app) => (
                <tr key={app._id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{app.studentName}</td>
                  <td className="p-2">{formatDate(app.dateOfBirth)}</td>
                  <td className="p-2">{app.parentName}</td>
                  <td className="p-2">{app.contactNumber}</td>
                  <td className="p-2">{app.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// Make sure this line exists at the end of the file
export default ViewAdmissions;
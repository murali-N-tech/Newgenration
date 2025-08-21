import React, { useState } from 'react';
import { submitAdmission } from '../../api/apiService';

function AdmissionsSection() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    parentName: '',
    contactNumber: '',
    email: '',
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    error: false,
  });

  // A relevant image for the admissions section
  const admissionsImageUrl = 'https://res.cloudinary.com/dlexfctt4/image/upload/v1755712099/WhatsApp_Image_2025-08-20_at_21.17.36_wrfqdt.jpg ';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', error: false });

    if (!formData.studentName || !formData.parentName || !formData.email) {
      setStatus({ submitting: false, message: 'Please fill all required fields.', error: true });
      return;
    }

    try {
      const response = await submitAdmission(formData);
      setStatus({ submitting: false, message: response.message, error: false });
      setFormData({ studentName: '', dateOfBirth: '', parentName: '', contactNumber: '', email: '' });
    } catch (error) {
      setStatus({ submitting: false, message: error.message || 'Submission failed. Please try again.', error: true });
    }
  };

  return (
    <section id="admissions" className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00008B] mb-12 font-display">
          Admissions Open
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Column */}
          <div className="md:w-5/12">
            <img 
              src={admissionsImageUrl} 
              alt="Students in a classroom" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          {/* Form Column */}
          <div className="md:w-7/12">
            <div className="bg-[#9ACD32] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Application Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Student's Full Name" required className="p-3 border rounded-md" />
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required className="p-3 border rounded-md" />
                  <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Parent's Full Name" required className="p-3 border rounded-md" />
                  <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required className="p-3 border rounded-md" />
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="p-3 border rounded-md mb-6 w-full" />
                
                <button type="submit" disabled={status.submitting} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400">
                  {status.submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
              {status.message && (
                <p className={`mt-4 text-center ${status.error ? 'text-red-500' : 'text-green-500'}`}>
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsSection;

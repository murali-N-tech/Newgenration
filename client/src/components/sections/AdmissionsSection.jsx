import React, { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
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

    // Basic validation
    if (!formData.studentName || !formData.parentName || !formData.email) {
      setStatus({ submitting: false, message: 'Please fill all required fields.', error: true });
      return;
    }

    try {
      const response = await submitAdmission(formData);
      setStatus({ submitting: false, message: response.message, error: false });
      // Clear form on success
      setFormData({ studentName: '', dateOfBirth: '', parentName: '', contactNumber: '', email: '' });
    } catch (error) {
      setStatus({ submitting: false, message: error.message || 'Submission failed. Please try again.', error: true });
    }
  };

  return (
    <SectionWrapper id="admissions" title="Admissions Open">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Student's Full Name" required className="form-input" />
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required className="form-input" />
            <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Parent's Full Name" required className="form-input" />
            <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required className="form-input" />
          </div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="form-input mb-6 w-full" />
          
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
    </SectionWrapper>
  );
}

export default AdmissionsSection;
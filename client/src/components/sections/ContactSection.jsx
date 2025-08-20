import React, { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { submitContactForm } from '../../api/apiService';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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

    try {
      const response = await submitContactForm(formData);
      setStatus({ submitting: false, message: response.message, error: false });
      // Clear form on success
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, message: error.message || 'Submission failed. Please try again.', error: true });
    }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="p-2 border rounded" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="p-2 border rounded" />
          </div>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="p-2 border rounded mb-6 w-full" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required className="p-2 border rounded w-full mb-6" rows="5"></textarea>
          
          <button type="submit" disabled={status.submitting} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400">
            {status.submitting ? 'Sending...' : 'Send Message'}
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

export default ContactSection;

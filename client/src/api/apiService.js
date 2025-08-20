import axios from 'axios';

const API_URL = "http://localhost:5001/api/";

// --- Helper Functions ---

// Get auth token from localStorage
const getAuthToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.token : null;
};

// Create config with Authorization header
const getAuthConfig = () => {
  const token = getAuthToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// --- Public Functions ---

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_URL}news`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const fetchGallery = async () => {
  try {
    const response = await axios.get(`${API_URL}gallery`);
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
};

export const submitAdmission = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}admissions`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Server submission error');
  }
};

export const adminLogin = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}auth/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Login failed');
  }
};

// --- Protected Admin Functions ---

export const createNews = async (newsData) => {
  const response = await axios.post(`${API_URL}news`, newsData, getAuthConfig());
  return response.data;
};

export const deleteNews = async (newsId) => {
  const response = await axios.delete(`${API_URL}news/${newsId}`, getAuthConfig());
  return response.data;
};

export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}events`, eventData, getAuthConfig());
  return response.data;
};

export const deleteEvent = async (eventId) => {
  const response = await axios.delete(`${API_URL}events/${eventId}`, getAuthConfig());
  return response.data;
};

export const addGalleryImage = async (imageData) => {
  const response = await axios.post(`${API_URL}gallery`, imageData, getAuthConfig());
  return response.data;
};

export const deleteGalleryImage = async (imageId) => {
  const response = await axios.delete(`${API_URL}gallery/${imageId}`, getAuthConfig());
  return response.data;
};

export const getAdmissions = async () => {
  const response = await axios.get(`${API_URL}admissions`, getAuthConfig());
  return response.data;
};

/**
 * Updates the status of an admission application. (This was missing)
 */
export const updateAdmissionStatus = async (id, status) => {
  const response = await axios.put(`${API_URL}admissions/${id}`, { status }, getAuthConfig());
  return response.data;
};

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

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

/**
 * Fetches the latest news articles.
 */
export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_URL}news`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

/**
 * Fetches upcoming events.
 */
export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

/**
 * Fetches gallery images.
 */
export const fetchGallery = async () => {
  try {
    const response = await axios.get(`${API_URL}gallery`);
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
};

/**
 * Submits an admission form.
 */
export const submitAdmission = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}admissions`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting admission form:", error);
    throw error.response?.data || new Error('Server submission error');
  }
};

/**
 * Logs in an admin user.
 */
export const adminLogin = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}auth/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in admin:", error);
    throw error.response?.data || new Error('Login failed');
  }
};

// --- Protected Admin Functions ---

/**
 * Creates a new news article.
 */
export const createNews = async (newsData) => {
  try {
    const response = await axios.post(`${API_URL}news`, newsData, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error creating news:", error);
    throw error.response?.data || new Error('Failed to create news');
  }
};

/**
 * Deletes a news article by its ID.
 */
export const deleteNews = async (newsId) => {
  try {
    const response = await axios.delete(`${API_URL}news/${newsId}`, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error.response?.data || new Error('Failed to delete news');
  }
};

/**
 * Creates a new event.
 */
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${API_URL}events`, eventData, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error.response?.data || new Error('Failed to create event');
  }
};

/**
 * Deletes an event by its ID.
 */
export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(`${API_URL}events/${eventId}`, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error.response?.data || new Error('Failed to delete event');
  }
};

/**
 * Saves a new gallery image's data to the database.
 */
export const addGalleryImage = async (imageData) => {
  try {
    const response = await axios.post(`${API_URL}gallery`, imageData, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error adding gallery image:", error);
    throw error.response?.data || new Error('Failed to add gallery image');
  }
};

/**
 * Deletes a gallery image by its ID.
 */
export const deleteGalleryImage = async (imageId) => {
  try {
    const response = await axios.delete(`${API_URL}gallery/${imageId}`, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    throw error.response?.data || new Error('Failed to delete gallery image');
  }
};

/**
 * Fetches all admission applications. (This was missing)
 */
export const getAdmissions = async () => {
  try {
    const response = await axios.get(`${API_URL}admissions`, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error fetching admissions:", error);
    throw error.response?.data || new Error('Failed to fetch admissions');
  }
};

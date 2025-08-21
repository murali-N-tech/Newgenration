 
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Initialize the Express application
const app = express();

// --- Middleware ---
// Enable Cross-Origin Resource Sharing to allow your React app to communicate with this server
app.use(cors()); 
// Enable the express.json() middleware to parse incoming JSON payloads
app.use(express.json()); 
// Enable the express.urlencoded() middleware to parse incoming URL-encoded payloads
app.use(express.urlencoded({ extended: false })); 

// --- API Routes ---
// Each of these lines mounts a router on a specific path.
// For example, any request to '/api/auth/...' will be handled by authRoutes.
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/gallery', require('./routes/galleryRoutes'));
app.use('/api/admissions', require('./routes/admissionRoutes'));
app.use('/api/imagekit-auth', require('./routes/imagekitRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/staff', require('./routes/staffRoutes'));
app.use('/api/fieldtrips', require('./routes/fieldTripRoutes'));


// A simple test route to make sure the API is running
app.get('/', (req, res) => {
    res.send('School Website API is running successfully...');
});

// Define the port the server will run on, defaulting to 5000
const PORT = process.env.PORT || 5001;

// Start the server and listen for incoming requests
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
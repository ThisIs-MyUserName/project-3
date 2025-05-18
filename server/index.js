import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://eaamanullah:pnEO2Fvp9pklFf3g@mycluster.vwdnp7b.mongodb.net/';
const DB_NAME = 'video_app';
const COLLECTION_NAME = 'user_locations';

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app in production
app.use(express.static(path.join(__dirname, '../dist')));

// MongoDB Connection
let db;

async function connectToDatabase() {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log('Connected to MongoDB successfully');
    db = client.db(DB_NAME);
    
    // Create index on geolocation field for faster queries
    await db.collection(COLLECTION_NAME).createIndex({ location: "2dsphere" });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// API Routes
app.post('/api/location', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    
    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const locationData = {
      location: {
        type: 'Point',
        coordinates: [longitude, latitude] // GeoJSON format: [longitude, latitude]
      },
      timestamp: new Date(),
      ipAddress: req.ip || 'unknown',
      userAgent: req.headers['user-agent'] || 'unknown'
    };

    const result = await db.collection(COLLECTION_NAME).insertOne(locationData);
    
    res.status(201).json({ 
      message: 'Location saved successfully',
      id: result.insertedId
    });
  } catch (error) {
    console.error('Error saving location:', error);
    res.status(500).json({ message: 'Server error while saving location' });
  }
});

// Catch-all handler for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server
async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
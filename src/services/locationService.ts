import axios from 'axios';

// Send user's location to the backend
export const saveUserLocation = async (latitude: number, longitude: number) => {
  try {
    await axios.post('/api/location', { latitude, longitude });
    console.log('Location saved successfully');
  } catch (error) {
    console.error('Error saving location:', error);
  }
};
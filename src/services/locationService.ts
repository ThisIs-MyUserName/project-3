import axios from 'axios';

// Send user's location to the backend
export const saveUserLocation = async (latitude: number, longitude: number) => {
  try {
    await axios.post('https://project-3-thisis-myusername-zaids-projects-9a3247fa.vercel.app/', { latitude, longitude });
    console.log('Location saved successfully');
  } catch (error) {
    console.error('Error saving location:', error);
  }
};
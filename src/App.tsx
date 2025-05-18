import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { saveUserLocation } from './services/locationService';

function App() {
  const [isLocationDenied, setIsLocationDenied] = useState(true);

  const requestLocation = async () => {
    try {
      // Try using the Permissions API first
      if ('permissions' in navigator) {
        const result = await navigator.permissions.query({ name: 'geolocation' });
        if (result.state === 'prompt' || result.state === 'granted') {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              saveUserLocation(latitude, longitude);
              setIsLocationDenied(false);
            },
            (error) => {
              console.error('Error getting geolocation:', error.message);
              setIsLocationDenied(true);
            }
          );
        }
      } else if ('geolocation' in navigator) {
        // Fallback to direct geolocation request
        (navigator as Navigator).geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            saveUserLocation(latitude, longitude);
            setIsLocationDenied(false);
          },
          (error) => {
            console.error('Error getting geolocation:', error.message);
            setIsLocationDenied(true);
          }
        );
      }
    } catch (error) {
      console.error('Permission request failed:', error);
      setIsLocationDenied(true);
    }
  };

  useEffect(() => {
    requestLocation();
  }, [isLocationDenied]);

  if( isLocationDenied ) return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-white text-lg font-bold mb-4">Enable Access</h2>
        <p className="text-gray-400 mb-4">
          Please allow access for a better user experience and to discover relevant content near you
        </p>
        {/* <button
          onClick={requestLocation}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Enable Location Access
        </button> */}
      </div>
    </div>
  )

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
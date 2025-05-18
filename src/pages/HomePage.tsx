import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoCard from '../components/VideoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videoData } from '../data/videoData';

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);
  
  const handleVideoSelect = (video: typeof videoData[0]) => {
    setCurrentVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll functionality for video carousel
  const scrollLeft = () => {
    const container = document.getElementById('video-carousel');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('video-carousel');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Featured Video */}
      <section className="relative pb-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 pt-8">
          <div className="max-w-5xl mx-auto">
            <VideoPlayer 
              src={currentVideo.videoUrl} 
              poster={currentVideo.thumbnail} 
              title={currentVideo.title} 
            />
            
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl font-bold text-white">{currentVideo.title}</h1>
              <p className="text-gray-400 mt-2">{currentVideo.views} views</p>
              <p className="text-gray-300 mt-4">{currentVideo.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Videos Section */}
      <section className="py-12 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">More Videos</h2>
            
            <div className="flex gap-2">
              <button 
                onClick={scrollLeft}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollRight}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div 
            id="video-carousel"
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videoData.map((video) => (
              <div key={video.id} className="flex-shrink-0 w-64 snap-start">
                <VideoCard 
                  id={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  duration={video.duration}
                  views={video.views}
                  onClick={() => handleVideoSelect(video)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-white mb-6">Video Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Nature', 'Technology', 'Travel', 'Education'].map((category) => (
              <div 
                key={category}
                className="bg-gray-800 rounded-lg overflow-hidden aspect-video relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-indigo-600/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-bold text-lg md:text-xl">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
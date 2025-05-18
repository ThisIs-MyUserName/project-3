import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  id, 
  title, 
  thumbnail, 
  duration, 
  views,
  onClick
}) => {
  return (
    <div 
      className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Thumbnail with play overlay */}
      <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-800">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Play icon overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="bg-indigo-600/80 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-all duration-300">
            <Play size={20} className="text-white" />
          </div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      
      {/* Video info */}
      <div className="mt-2">
        <h3 className="font-medium text-white text-sm line-clamp-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-xs mt-1">{views} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
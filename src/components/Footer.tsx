import React from 'react';
import { Film, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Film size={24} className="text-indigo-500" />
              <span className="text-xl font-bold text-white">VideoVibes</span>
            </div>
            <p className="text-sm leading-relaxed">
              A beautiful video streaming platform with geolocation features.
              Watch amazing content from anywhere in the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/" className="text-sm hover:text-indigo-400 transition-colors">Videos</a></li>
              <li><a href="/" className="text-sm hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="/" className="text-sm hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/" className="text-sm hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="/" className="text-sm hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-indigo-400 transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="/" className="hover:text-indigo-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="/" className="hover:text-indigo-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} VideoVibes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
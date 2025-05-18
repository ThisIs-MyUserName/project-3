import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Film, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Film size={28} className="text-indigo-500" />
            <span className="text-xl font-bold">VideoVibes</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-indigo-400 transition-colors">
              Home
            </Link>
            <Link to="/" className="hover:text-indigo-400 transition-colors">
              Videos
            </Link>
            <Link to="/" className="hover:text-indigo-400 transition-colors">
              About
            </Link>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
              Sign In
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 animate-fade-in">
            <Link 
              to="/" 
              className="hover:text-indigo-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/" 
              className="hover:text-indigo-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
            </Link>
            <Link 
              to="/" 
              className="hover:text-indigo-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors w-full mt-2">
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
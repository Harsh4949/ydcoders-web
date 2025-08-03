import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 35;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 70; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 shadow-lg py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img 
              src={logo} 
              alt="YDCODERS Logo" 
              className="h-12 w-auto"
            /> 
            <span className="text-white text-lg font-bold ml-2">YDCODERS </span> 
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white font-medium transition-all duration-300 hover:text-blue-400 hover:-translate-y-0.5"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white font-medium transition-all duration-300 hover:text-blue-400 hover:-translate-y-0.5"
            >
              Services
            </button>
            <Link 
              to="/careers" 
              className="text-white font-medium transition-all duration-300 hover:text-blue-400 hover:-translate-y-0.5"
            >
              Career
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white font-medium transition-all duration-300 hover:text-blue-400 hover:-translate-y-0.5"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'
        }`}>
          <div className="bg-gray-900 rounded-lg py-4 px-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white font-medium transition-colors duration-300 hover:text-blue-400"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white font-medium transition-colors duration-300 hover:text-blue-400"
            >
              Services
            </button>
            <Link 
              to="/careers" 
              className="block text-white font-medium transition-colors duration-300 hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white font-medium transition-colors duration-300 hover:text-blue-400"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

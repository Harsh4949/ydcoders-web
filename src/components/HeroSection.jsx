import React from 'react';
import heroBackground from '../assets/herobackground.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <header className="hero-content">
              <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                IT Experts
                <span className="gradient-text block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  World-changing technologies
                </span>
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
                We help you build high-quality digital solutions and deliver 
                a wide range of professional services to our clients.
              </p>
              <nav className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center" role="navigation" aria-label="Main navigation">
                <a 
                  href="#service" 
                  className="btn hero-btn primary bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                  aria-label="View our IT services and solutions"
                >
                  Our Services
                </a>
                <a 
                  href="#contact" 
                  className="btn hero-btn secondary border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold"
                  aria-label="Get in touch with our team"
                >
                  Get in Touch
                </a>
              </nav>
            </header>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;

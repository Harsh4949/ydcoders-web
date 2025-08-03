import React from 'react';
import heroBackground from '../assets/herobackground.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="hero-content">
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
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#service" 
                className="btn hero-btn primary bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="btn hero-btn secondary border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="hero-bg-elements absolute inset-0 pointer-events-none z-20">
        <div className="floating-element element-1 absolute w-20 h-20 bg-white/10 rounded-full animate-float" style={{top: '20%', left: '10%'}}></div>
        <div className="floating-element element-2 absolute w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce" style={{top: '60%', right: '15%'}}></div>
        <div className="floating-element element-3 absolute w-12 h-12 bg-orange-500/20 rounded-full animate-pulse" style={{bottom: '30%', left: '20%'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-primary-400">About Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ion-ios-arrow-forward text-primary-400 text-sm mr-2"></i>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:ml-2"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <i className="ion-ios-arrow-forward text-primary-400 text-sm mr-2"></i>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:ml-2"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center">
                <i className="ion-ios-arrow-forward text-primary-400 text-sm mr-2"></i>
                <a 
                  href="#service" 
                  className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:ml-2"
                >
                  Our Services
                </a>
              </li>
              <li className="flex items-center">
                <i className="ion-ios-arrow-forward text-primary-400 text-sm mr-2"></i>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:ml-2"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="flex items-center">
                <i className="ion-ios-arrow-forward text-primary-400 text-sm mr-2"></i>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:ml-2"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-primary-400">Contact Us</h4>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
              <p>
                Kavathe-Mahankal<br />
                416419, India<br />
                <span className="text-primary-400 font-semibold">Phone:</span> +91 8055808428<br />
                <span className="text-primary-400 font-semibold">Email:</span> contact@ydcoders.com
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/ydcoders-it-solution/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-gray-300 text-xl transition-all duration-300 hover:text-primary-400 hover:bg-primary-400/20 hover:-translate-y-1"
              >
                <i className="ion-logo-linkedin"></i>
              </a>
              <a 
                href="https://www.instagram.com/ydcoders/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-gray-300 text-xl transition-all duration-300 hover:text-primary-400 hover:bg-primary-400/20 hover:-translate-y-1"
              >
                <i className="ion-logo-instagram"></i>
              </a>
              <a 
                href="https://t.me/ydcoders" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-gray-300 text-xl transition-all duration-300 hover:text-primary-400 hover:bg-primary-400/20 hover:-translate-y-1"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a 
                href="https://whatsapp.com/channel/0029VaANptu2ER6mvFD6jw2O" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-gray-300 text-xl transition-all duration-300 hover:text-primary-400 hover:bg-primary-400/20 hover:-translate-y-1"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 YDCODERS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { submitContactForm } from '../services/firebase';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState({ show: false, message: '', variant: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Convert email to lowercase
    const submissionData = {
      ...formData,
      email: formData.email.toLowerCase()
    };

    const result = await submitContactForm(submissionData);
    
    if (result.success) {
      setShowAlert({
        show: true,
        message: 'Form submitted successfully! We will get back to you soon.',
        variant: 'success'
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
    } else {
      setShowAlert({
        show: true,
        message: 'Error submitting form. Please try again.',
        variant: 'danger'
      });
    }

    setIsSubmitting(false);
    setTimeout(() => setShowAlert({ show: false, message: '', variant: 'success' }), 5000);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <section id="contact" className="contact-section py-20 pt-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="section-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="mb-8 lg:mb-0">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="YDCODERS Location"
                  className="w-full h-96 rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
            
            <div>
              <div className="contact-form-wrapper bg-white p-8 rounded-lg shadow-lg">
                {showAlert.show && (
                  <div className={`mb-4 p-4 rounded-lg ${
                    showAlert.variant === 'success' 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {showAlert.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

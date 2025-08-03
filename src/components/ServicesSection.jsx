import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: 'fa-laptop',
      title: 'Web App Development',
      description: 'Our custom web development services include both front-end and back-end development for all your needs.',
      color: 'bg-blue-500'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Mobile App Development', 
      description: 'We provide multi-platform app solutions for Android and iOS devices using modern frameworks.',
      color: 'bg-green-500'
    },
    {
      icon: 'fa-bullhorn',
      title: 'Digital Marketing',
      description: 'Increase visibility and engage with your customers through our effective digital marketing services.',
      color: 'bg-orange-500'
    },
    {
      icon: 'fa-code',
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business requirements and workflow.',
      color: 'bg-purple-500'
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
      color: 'bg-teal-500'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and customer data.',
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="service" className="services-section py-20 pt-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
            We help you build high-quality digital solutions and deliver 
            a wide range of professional services to our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
              <div className={`service-icon w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              <h5 className="service-title text-xl font-semibold text-gray-800 mb-4">{service.title}</h5>
              <p className="service-description text-gray-600 leading-relaxed">{service.description}</p>
              <div className="service-hover-effect absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

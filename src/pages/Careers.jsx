import React, { useState } from 'react';
import { submitCareerApplication } from '../services/firebase';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    skills: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState({ show: false, message: '', variant: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const positions = [
    {
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote/On-site',
      experience: '2+ years',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript'],
      description: 'We are looking for a skilled Frontend Developer to join our team and help build amazing user interfaces.'
    },
    {
      title: 'Backend Developer', 
      type: 'Full-time',
      location: 'Remote/On-site',
      experience: '3+ years',
      skills: ['Node.js', 'Python', 'MongoDB', 'SQL'],
      description: 'Join our backend team to develop robust server-side applications and APIs.'
    },
    {
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Remote/On-site', 
      experience: '4+ years',
      skills: ['MERN Stack', 'Python', 'DevOps', 'Cloud'],
      description: 'Looking for an experienced Full Stack Developer to work on end-to-end web applications.'
    },
    {
      title: 'Mobile App Developer',
      type: 'Full-time',
      location: 'Remote/On-site',
      experience: '2+ years', 
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Develop cross-platform mobile applications using modern frameworks.'
    }
  ];

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

    const submissionData = {
      ...formData,
      email: formData.email.toLowerCase()
    };

    const result = await submitCareerApplication(submissionData);
    
    if (result.success) {
      setShowAlert({
        show: true,
        message: 'Application submitted successfully! We will review your application and get back to you soon.',
        variant: 'success'
      });
      setFormData({ name: '', email: '', phone: '', position: '', experience: '', skills: '', message: '' });
    } else {
      setShowAlert({
        show: true,
        message: 'Error submitting application. Please try again.',
        variant: 'danger'
      });
    }

    setIsSubmitting(false);
    setTimeout(() => setShowAlert({ show: false, message: '', variant: 'success' }), 5000);
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="hero-subtitle text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Build your career with YDCODERS and work on exciting projects that make a difference
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-bold text-gray-800">Open Positions</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="mb-8 lg:mb-0">
                <div className="position-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h5 className="position-title text-2xl font-bold text-gray-800">{position.title}</h5>
                      <span className="position-type bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="position-meta mb-6 space-y-2">
                      <div className="meta-item flex items-center text-gray-600">
                        <i className="fas fa-map-marker-alt mr-3 text-primary"></i>
                        {position.location}
                      </div>
                      <div className="meta-item flex items-center text-gray-600">
                        <i className="fas fa-clock mr-3 text-primary"></i>
                        {position.experience}
                      </div>
                    </div>
                    
                    <p className="position-description text-gray-700 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="skills-section">
                      <h6 className="text-lg font-semibold text-gray-800 mb-3">Required Skills:</h6>
                      <div className="skills-tags flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="skill-tag bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-section py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-4xl font-bold text-gray-800 text-center mb-16">Apply Now</h2>
            
            <div className="application-form-card bg-gray-50 rounded-lg shadow-lg p-8">
              {showAlert.show && (
                <div className={`mb-6 p-4 rounded-lg ${
                  showAlert.variant === 'success' 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {showAlert.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none bg-white"
                    >
                      <option value="">Select Position</option>
                      {positions.map((pos, index) => (
                        <option key={index} value={pos.title}>{pos.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g., 3 years"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Key Skills *
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="e.g., React, Node.js, Python"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter / Additional Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

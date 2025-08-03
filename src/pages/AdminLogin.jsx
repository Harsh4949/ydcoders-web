import React, { useState } from 'react';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState({ show: false, message: '', variant: 'danger' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic authentication logic (you should implement proper authentication)
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      // Redirect to dashboard or set authentication state
      window.location.href = '/admin-dashboard';
    } else {
      setShowAlert({
        show: true,
        message: 'Invalid username or password',
        variant: 'danger'
      });
      setTimeout(() => setShowAlert({ show: false, message: '', variant: 'danger' }), 3000);
    }
  };

  return (
    <div className="admin-login-page min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="login-card bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <img 
              src="/images/image.png" 
              alt="YDCODERS Logo" 
              height="60"
              className="mx-auto mb-4"
            />
            <h3 className="login-title text-2xl font-bold text-gray-800 mb-2">Admin Login</h3>
            <p className="text-gray-600">Sign in to access the dashboard</p>
          </div>

          {showAlert.show && (
            <div className={`mb-6 p-4 rounded-lg ${
              showAlert.variant === 'danger' 
                ? 'bg-red-100 text-red-700 border border-red-200' 
                : 'bg-green-100 text-green-700 border border-green-200'
            }`}>
              {showAlert.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                placeholder="Enter username"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-6">
            <small className="text-gray-500">
              Demo credentials: admin / admin123
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

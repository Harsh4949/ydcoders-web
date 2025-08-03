import React, { useState, useEffect } from 'react';
import { database } from '../services/firebase';
import { ref, onValue } from 'firebase/database';

const AdminDashboard = () => {
  const [contactResponses, setContactResponses] = useState([]);
  const [careerApplications, setCareerApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch contact responses
    const contactRef = ref(database, 'responses');
    const contactUnsubscribe = onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const responses = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setContactResponses(responses.reverse()); // Show latest first
      }
    });

    // Fetch career applications
    const careerRef = ref(database, 'career_applications');
    const careerUnsubscribe = onValue(careerRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const applications = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setCareerApplications(applications.reverse()); // Show latest first
      }
      setLoading(false);
    });

    return () => {
      contactUnsubscribe();
      careerUnsubscribe();
    };
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="admin-dashboard loading min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <h3 className="text-2xl font-semibold text-gray-700">Loading dashboard...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="dashboard-header mb-8">
          <h2 className="dashboard-title text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h2>
          <p className="dashboard-subtitle text-xl text-gray-600">Manage contact responses and career applications</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat-card bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="stat-number text-3xl font-bold text-primary mb-2">{contactResponses.length}</h3>
            <p className="stat-label text-gray-600 font-medium">Contact Inquiries</p>
          </div>
          <div className="stat-card bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="stat-number text-3xl font-bold text-primary mb-2">{careerApplications.length}</h3>
            <p className="stat-label text-gray-600 font-medium">Job Applications</p>
          </div>
          <div className="stat-card bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="stat-number text-3xl font-bold text-primary mb-2">
              {contactResponses.filter(r => 
                new Date(r.timestamp) > new Date(Date.now() - 7*24*60*60*1000)
              ).length}
            </h3>
            <p className="stat-label text-gray-600 font-medium">This Week</p>
          </div>
          <div className="stat-card bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="stat-number text-3xl font-bold text-primary mb-2">
              {careerApplications.filter(r => 
                new Date(r.timestamp) > new Date(Date.now() - 7*24*60*60*1000)
              ).length}
            </h3>
            <p className="stat-label text-gray-600 font-medium">New Applications</p>
          </div>
        </div>

        {/* Contact Responses */}
        <div className="mb-8">
          <div className="data-card bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h5 className="text-xl font-semibold text-gray-800 mb-0">Contact Inquiries</h5>
            </div>
            <div className="p-6">
              {contactResponses.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Phone</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Message</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {contactResponses.slice(0, 10).map((response) => (
                        <tr key={response.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-800">{response.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-800">{response.email}</td>
                          <td className="px-4 py-3 text-sm text-gray-800">{response.phone}</td>
                          <td className="px-4 py-3 text-sm text-gray-800">{response.message.substring(0, 50)}...</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{formatDate(response.timestamp)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No contact inquiries yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Career Applications */}
        <div>
          <div className="data-card bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h5 className="text-xl font-semibold text-gray-800 mb-0">Career Applications</h5>
            </div>
            <div className="p-6">
              {careerApplications.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Position</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Experience</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Skills</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {careerApplications.slice(0, 10).map((application) => (
                        <tr key={application.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-800">{application.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-800">{application.email}</td>
                          <td className="px-4 py-3">
                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                              {application.position}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-800">{application.experience}</td>
                          <td className="px-4 py-3 text-sm text-gray-800">{application.skills.substring(0, 30)}...</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{formatDate(application.timestamp)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No career applications yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

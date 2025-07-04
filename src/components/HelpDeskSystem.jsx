import React from 'react'
import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Ticket from './Ticket';

const HelpdeskSystem = () => {
  const [currentView, setCurrentView] = useState('login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <Login onNavigate={setCurrentView} formData={formData} onInputChange={handleInputChange} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} />;
      case 'createTicket':
      case 'ticketList':
        return <Ticket onNavigate={setCurrentView} view={currentView} />;
      default:
        return <Login onNavigate={setCurrentView} formData={formData} onInputChange={handleInputChange} />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentView()}
      
      {/*  Navigation */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 space-y-2">
        <div className="text-xs font-semibold text-gray-500 mb-2">Navigation</div>
        {[
          { key: 'login', label: 'Login' },
          { key: 'dashboard', label: 'Dashboard' },
          { key: 'createTicket', label: 'Ticket' },
          { key: 'ticketList', label: 'Ticket List' }
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setCurrentView(key)}
            className={`block w-full text-left px-3 py-2 rounded text-sm ${
              currentView === key 
                ? 'bg-teal-100 text-teal-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HelpdeskSystem;
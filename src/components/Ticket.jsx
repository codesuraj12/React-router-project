import React from 'react'
import { useState } from 'react';



const Ticket = ({ onNavigate, view }) => {
  const [ticketData, setTicketData] = useState({
    fromName: '',
    department: '',
    category: '',
    type: '',
    priority: '',
    subject: '',
    description: ''
  });

  const handleInputChange = (field, value) => {
    setTicketData(prev => ({ ...prev, [field]: value }));
  };

  return view === 'createTicket' ? (
    <CreateTicketForm
      ticketData={ticketData}
      onInputChange={handleInputChange}
      onNavigate={onNavigate}
    />
  ) : (
    <TicketList onNavigate={onNavigate} />
  );
};



const CreateTicketForm = ({ ticketData, onInputChange, onNavigate }) => (
  <div className="min-h-screen bg-gray-100">
    <div className="bg-teal-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Helpdesk</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Create New Ticket</span>
        <button onClick={() => onNavigate('dashboard')} className="text-white hover:text-gray-200">
          ← Back
        </button>
      </div>
    </div>

    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Create New Ticket</h2>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={ticketData.fromName}
                onChange={(e) => onInputChange('fromName', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select
                value={ticketData.department}
                onChange={(e) => onInputChange('department', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              >
                <option value="">Select Department</option>
                <option value="IT Support">IT Support</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={ticketData.category}
                onChange={(e) => onInputChange('category', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              >
                <option value="">Select Category</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
                <option value="Network">Network</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={ticketData.type}
                onChange={(e) => onInputChange('type', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              >
                <option value="">Select Type</option>
                <option value="Bug">Bug</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Support">Support</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select
              value={ticketData.priority}
              onChange={(e) => onInputChange('priority', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              placeholder="Brief description of the issue"
              value={ticketData.subject}
              onChange={(e) => onInputChange('subject', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              rows={6}
              placeholder="Detailed description of the issue..."
              value={ticketData.description}
              onChange={(e) => onInputChange('description', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => onNavigate('ticketList')}
              className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              Submit Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const tickets = [
  { id: 1001, subject: 'Login Issue', priority: 'High', status: 'Open', date: '2024-01-15' },
  { id: 1002, subject: 'Password Reset', priority: 'Medium', status: 'In Progress', date: '2024-01-14' },
  { id: 1003, subject: 'Email Problems', priority: 'Low', status: 'Closed', date: '2024-01-13' },
  { id: 1004, subject: 'Network Connectivity', priority: 'Critical', status: 'Open', date: '2024-01-12' },
  { id: 1005, subject: 'Software Installation', priority: 'Medium', status: 'Resolved', date: '2024-01-11' },
];

const getPriorityColor = (priority) => {
  const colors = {
    Critical: 'bg-red-100 text-red-800',
    High: 'bg-orange-100 text-orange-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-green-100 text-green-800'
  };
  return colors[priority] || 'bg-gray-100 text-gray-800';
};

const getStatusColor = (status) => {
  const colors = {
    Open: 'bg-blue-100 text-blue-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    Resolved: 'bg-green-100 text-green-800',
    Closed: 'bg-gray-100 text-gray-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

const TicketList = ({ onNavigate }) => (
  <div className="min-h-screen bg-gray-100">
    <div className="bg-teal-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Helpdesk</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm">List of Tickets</span>
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-white hover:text-gray-200"
        >
          ← Back
        </button>
      </div>
    </div>

    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">List of Tickets</h2>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Search tickets..."
              className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
            <button
              onClick={() => onNavigate('createTicket')}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              + New Ticket
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{ticket.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);




export default Ticket
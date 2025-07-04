import React from 'react'



const Dashboard = ({ onNavigate }) => {
  const stats = [
    { value: 12, label: 'Open', color: 'bg-blue-500' },
    { value: 8, label: 'Resolved', color: 'bg-green-500' },
    { value: 2, label: 'High Priority', color: 'bg-red-500' },
    { value: 2, label: 'Pending', color: 'bg-yellow-500' }
  ];

  const recentTickets = [
    { id: 1001, subject: 'Login issues', date: '2 hours ago' },
    { id: 1002, subject: 'Password reset', date: '4 hours ago' },
    { id: 1003, subject: 'Email problems', date: '1 day ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-teal-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Helpdesk</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Dashboard</span>
          <div className="flex space-x-2 items-center">
            <div className="w-full ">
              <img src="/Group.png" alt="logo" />
            </div>
            <div className="w-full">
                <img src="/Vector.png" alt="logo2" />
            </div>
            <div className="w-full">
                <img src="/Vector(1).png" alt="logo3" />
            </div>
            <div className="w-full" onClick={() => onNavigate('login')}>
                <img src="/Vector(2).png" alt="logo4" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} text-white p-6 rounded-lg shadow-lg`}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Tickets</h2>
            <button 
              onClick={() => onNavigate('createTicket')}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors flex items-center space-x-2"
            >
              {/* <Plus className="h-4 w-4" /> */}
              <span>New Ticket</span>
            </button>
          </div>
          
          <div className="space-y-3">
            {recentTickets.map(ticket => (
              <div key={ticket.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Ticket #{ticket.id}</span>
                  <span className="text-gray-600">{ticket.subject}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{ticket.date}</span>
                  <button 
                    onClick={() => onNavigate('ticketList')}
                    className="text-teal-500 hover:text-teal-600"
                  >
                    {/* <Eye className="h-4 w-4" /> */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard
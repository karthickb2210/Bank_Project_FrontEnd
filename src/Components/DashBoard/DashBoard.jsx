import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Account Balance</h3>
          <p className="text-gray-700">$10,000</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Recent Transactions</h3>
          <ul>
            <li className="text-gray-700">Deposit - $500</li>
            <li className="text-gray-700">Withdrawal - $200</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Notifications</h3>
          <ul>
            <li className="text-gray-700">You have a new message</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

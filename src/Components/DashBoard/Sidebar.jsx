import React from 'react';
import Buttons from '../button/Buttons';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4">
      <ul>
        <li className="mb-4"><a href="#" className="hover:text-gray-300">Home</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-300">Accounts</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-300">Transactions</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-300">Settings</a></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './DashBoard';
import Buttons from '../button/Buttons';

const Head = () => {
    
    
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Dashboard />
        <Buttons />
        
      </div>
    </div>
  );
};

export default Head;

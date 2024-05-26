import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './DashBoard';
import axios from 'axios';
const Head = () => {
    
    
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Dashboard name={name} />
      </div>
    </div>
  );
};

export default Head;

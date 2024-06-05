import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = ({name}) => {
  const navigate = useNavigate(); 
    
  const handleLogout =()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/")
  } 

  
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container ">
        <h1 className="text-[30px] font-bold relative">Welcome {name}</h1>
        
      </div>
      <div className='flex justify-end items-end ' > 
        <button onClick={handleLogout}  className=' text-black border-cyan-800'>LogOut</button>
        </div>
    </nav>
  );
};

export default Navbar;

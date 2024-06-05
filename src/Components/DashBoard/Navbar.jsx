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
      <div className="container">
        <h1 className="text-[30px] font-bold">Welcome {name}</h1>
        
      </div>
      <div className='flex justify-end  ' > 
        <button onClick={handleLogout}  className=' text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>LogOut</button>
        </div>
    </nav>
  );
};

export default Navbar;

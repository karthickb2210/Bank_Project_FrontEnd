import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate(); 
    const [name ,setName] = useState("");
    const password = localStorage.getItem("password");
    const username = localStorage.getItem("username");

  const handleLogout =()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/")
  } 

    const fet =async() =>{ await axios.get("http://localhost:8080/user",{
      auth :{
        username : username,
        password : password
      }
    }).then((data)=>{
        console.log(data.data);
        setName(data.data);
    })}
    useEffect(()=>{
        fet();
    })
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

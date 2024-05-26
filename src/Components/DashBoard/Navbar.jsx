import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Navbar = () => {
    const [name ,setName] = useState("");
   
    const fet =async() =>{ await axios.get("http://localhost:8080/greet",{
      auth :{
        username:"kar",
        password :"123"
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
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">Welcome {name}</h1>
      </div>
    </nav>
  );
};

export default Navbar;

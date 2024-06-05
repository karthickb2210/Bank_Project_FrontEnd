import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './DashBoard';
import Buttons from '../button/Buttons';
import axios from 'axios';

const Head = () => {
  const [loader,setloader] = useState(true);
  const password = localStorage.getItem("password");
    const username = localStorage.getItem("username");
  const [balance,setBalance] = useState();
  const [name,setName] = useState();
  const getBalance = async() =>{
    await axios.get("http://localhost:8080/user",{
      auth :{
        username : username,
        password : password
      }
    }).then((data)=>{
      setName(data.data.name)
      setBalance(data.data.balance);
      setloader(false)
    }).catch((e)=>{
      console.log(e)
    })
  }
  useEffect(()=>{
    getBalance()
  })
  
  return (<>
     
      
        <Navbar name={name} />
        
      {loader ? <></> :
      <div className="flex ">
      <div><Sidebar/></div>
      <div><Dashboard bal={balance}/>
        <Buttons /></div>

        
      </div>
      }
    </>);
};

export default Head;

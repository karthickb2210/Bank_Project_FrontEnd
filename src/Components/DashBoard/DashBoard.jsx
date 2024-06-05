import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [balance,setBalance] = useState("");
  const password = localStorage.getItem("password");
    const username = localStorage.getItem("username");
  const getBalance = async() =>{
    await axios.get("http://localhost:8080/user",{
      auth :{
        username : username,
        password : password
      }
    }).then((data)=>{
      setBalance(data.data.balance);
    }).catch((e)=>{
      console.log(e)
    })
  }
  useEffect(()=>{
    getBalance()
  })
  return (
    <div className="p-4">
        
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Account Balance</h3>
          <p className="text-gray-700">$ {balance}</p>
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

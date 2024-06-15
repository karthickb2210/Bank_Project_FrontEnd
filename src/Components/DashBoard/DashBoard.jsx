import React from 'react';
import Buttons from '../button/Buttons';
import Transactions from './Transactions';
const Dashboard = ({bal,trans}) => {
  
  return (  
    <>
    { trans ? <Transactions /> :

    <>
      <div className="p-4">
        
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Account Balance</h3>
          <p className="text-gray-700">$ {bal}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Last Transaction</h3>
          <ul>
            <li className="text-gray-700">Deposit - {bal}</li>
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
    <Buttons />
    </>
    
    }
    </>
    
  );
};

export default Dashboard;

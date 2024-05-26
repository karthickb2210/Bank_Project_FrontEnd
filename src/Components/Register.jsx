import axios from "axios";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const handleRegister = async () => {
    axios.post("http://localhost:8080/register", user).then((res) => {
      console.log("registered");
      if(res.status==200){
        console.log("Successfully verified")
      }
      console.log(res);
    });
  };
  
  const [user,setUser] = useState({
    username :"",
    password: "",
    active:false
  });
  const handleChange =(e) =>{
    e.preventDefault();
    const {name,value} = e.target;
    
    setUser({
      ...user,
      [name] : value
  })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Register</h2>
        <form>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mailId"
            >
              Email Address
            </label>
            <input
              id="mailId"
              type="email"
              name="username"
              placeholder="Enter your mail id"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleRegister}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

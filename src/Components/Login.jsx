import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Loader from './Loader/Loader';

function Login() {
  const [ loader,setLoader] = useState();
  const navigate = useNavigate();
  const[cred,setCred] = useState({
    username : "",
    password : ""
  }); 
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setCred({ 
      ...cred,
      [name] :value
    })
  }
  const handleLogin =async (e)=>{
    setLoader(true)
    e.preventDefault();
    console.log(cred)
    await axios.post("http://localhost:8080/validate",cred).then((res)=>{
      console.log(res)
      if(res.data){
        console.log(cred.username + " "+ cred.password)
        localStorage.setItem("username",cred.username)
        localStorage.setItem("password",cred.password)
          navigate("/dashboard")
      }
    }).catch((e)=>{
      console.log(e);
    })
    setLoader(false)
  }
   
  return (<>
    { loader ?  <Loader/> : 
    <div className=' flex justify-center items-center'>
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
    <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span class="text-[#7747ff]">App</span></div>
    <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
<form className="flex flex-col gap-3">
    <div className="block relative"> 
    <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
    <input onChange={handleChange} name='username' value={cred.username} type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
    
    </div>
    <div className="block relative"> 
    <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
    <input onChange={handleChange} name='password' value={cred.password} type="text" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
    
    </div>
    <div>
    <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
    </a></div>
    <button type="submit" onClick={handleLogin} className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

</form>
<div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <Link to={`/register`}><a className="text-sm text-[#7747ff]" href="#">Sign up for free!</a></Link></div>
</div>
    </div>
    
    }</> )
}

export default Login

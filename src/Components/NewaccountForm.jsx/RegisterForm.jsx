import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    pan: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
  });
  const [cpass,setCpass] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    details.userId = details.firstName + details.dob;
    if (!details.password.match(cpass)) {
      alert("Password Doesn't match");
    } else if (details.mobile.length != 10) {
      alert("Wrong mobile number");
    } else if (details.password.length < 6) {
      alert("Minimum password size is 6");
    } else {
      console.log(details);
      
      axios.post("http://localhost:8080/register",details).then((res)=>{
        console.log("successfull")
        navigate("/login")
      }).catch((e)=>{
        console.log(e)
      })
    }
  };
  return (
    <form className="px-7 h-screen grid justify-center items-center bg-slate-400">
      <div className="grid gap-6" id="form">
        <h1 className=" text-[25px]">Enter the Details :</h1>
        <div className="w-full flex gap-3">
          <input
            onChange={handleChange}
            className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
            type="text"
            placeholder="First Name"
            value={details.firstName}
            name="firstName"
            required=""
          />
          <input
            onChange={handleChange}
            className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
            type="text"
            placeholder="Last Name"
            value={details.lastName}
            name="lastName"
          />
        </div>
        <div className="grid gap-6 w-full">
          <input
            onChange={handleChange}
            className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
            type="text"
            placeholder="Pan Number"
            value={details.pan}
            name="pan"
          />

          <input
            onChange={handleChange}
            className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
            type="Email"
            placeholder="Email"
            value={details.email}
            name="email"
          />
          <input
            onChange={handleChange}
            className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
            type="mobile"
            placeholder="Mobile Number"
            value={details.mobile}
            name="mobile"
          />

          <input
            onChange={handleChange}
            className="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]"
            type="date"
            required=""
            name="dob"
            value={details.dob}
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={handleChange}
            className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
            type="password"
            placeholder="Password"
            value={details.password}
            name="password"
            required=""
          />
          <input
            onChange={(e)=>setCpass(e.target.value)}
            className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
            type="password"
            placeholder="Confirm password"
            value={cpass}
            name="confirmPassword"
            required=""
          />
        </div>
        <button
          className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;

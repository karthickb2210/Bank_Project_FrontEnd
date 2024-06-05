import React, { useState } from 'react'
import './styles.css'
import axios from 'axios';
function Buttons() {
  const username = localStorage.getItem("username")
  const password = localStorage.getItem("password")
    const [transcation,setTransaction ] = useState({
      "toAccNumber" : "" ,
      "toName" : "",
      "fromName" : "",
      "amount" : 0,
      "done" : true
  })
    const [form,setForm]  =useState(false);
    const handleClick =() =>{
        setForm(true)
    }
    const handleChange = (e)=>{
      const { name, value } = e.target;
    setTransaction({
      ...transcation,
      [name]: value,
    });
    }
    const handleSubmit = (e) =>{
      axios.post("http://localhost:8080/send",transcation,{
        auth :{
          username : username,
          password : password
        }
      }).then((data)=>{
        console.log(data)
        alert("Successfull")
        
      }).catch((e)=>{
        console.log(e)
      })
    }
  return (
    <>
      {
        !form ?
        <button className="button" onClick={handleClick}><span>Transfer</span></button>
      : 
      <div className='flex justify-center items-center'>
      <section className="add-card page">
  <form className="form">
    <label htmlFor="name" className="label">
      <span className="title">Card holder full name</span>
      <input
        className="input-field"
        type="text"
        value={transcation.toName}
        name="toName"        
        placeholder="Enter your full name"
        onChange={handleChange}
      />
    </label>
    <label for="serialCardNumber" class="label">
      <span className="title">Account Number</span>
      <input
        id="serialCardNumber"
        className="input-field"
       value={transcation.toAccNumber}
        name="toAccNumber"
        placeholder="0000 0000 0000 0000"
        onChange={handleChange}
      />
    </label>
    <label htmlFor="serialCardNumber" class="label">
      <span className="title">Amount </span>
      <input
        id="Amount"
        className="input-field"
        value={transcation.amount}
        name="amount"
        placeholder="$ 000"
        onChange={handleChange}
      />
    </label>
    
    <button className="checkout-btn" type="button" onClick={handleSubmit}>Send Money</button>
  </form>
</section>

</div>
      }

    </>
  )
}

export default Buttons

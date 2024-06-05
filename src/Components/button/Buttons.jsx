import React, { useState } from 'react'
import './styles.css'
function Buttons() {

    const [form,setForm]  =useState(false);
    const handleClick =() =>{
        setForm(true)
    }
  return (
    <>
      {
        !form ?
        <button className="button" onClick={handleClick}><span>Trasfer</span></button>
      : 
      <div className='flex justify-center items-center'>
      <section className="add-card page">
  <form class="form">
    <label htmlFor="name" className="label">
      <span className="title">Card holder full name</span>
      <input
        className="input-field"
        type="text"
        name="input-name"
        title="Input title"
        placeholder="Enter your full name"
      />
    </label>
    <label for="serialCardNumber" class="label">
      <span className="title">Account Number</span>
      <input
        id="serialCardNumber"
        className="input-field"
       // type="number"
        name="input-name"
        title="Input title"
        placeholder="0000 0000 0000 0000"
      />
    </label>
    <label htmlFor="serialCardNumber" class="label">
      <span className="title">Amount </span>
      <input
        id="Amount"
        className="input-field"
        //type="number"
        name="input-name"
        title="Input title"
        placeholder="$ 000"
      />
    </label>
    
    <button className="checkout-btn" type="button">Send Money</button>
  </form>
</section>

</div>
      }

    </>
  )
}

export default Buttons

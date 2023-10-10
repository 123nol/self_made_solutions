import React from 'react'
import { useState } from 'react'
const Contact = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [subject, setSubject]= useState("")
  const [message, setMessage]= useState("")
  

  return (
    <div className='allcontacts'>
      <div className='linkHeader'>
        <h1>Contact</h1>
        <p>We’d love to talk about your right-now challenges and share our insights on how to conquer them.</p>
      </div>
      <div className='contacts'>
        <div className='contact' id= "address">
          <h3>ADDRESS</h3>
          <p>G&B Building 3rd Floor,307</p>
          <p>Gurd Shola, Addis Ababa, Ethiopia</p>
          <p>Go to google maps</p>

        </div>
        <div className='contact' id="phone">
          <h3>PHONE NUMBER</h3>
          <p>+251 922 825 445</p>
          <p>+251 922 825 445</p>
        </div>
        <div className='contact' id="email">
          <h3>EMAIL</h3>
          <p>earaldtradinginfo@gmail.com</p>
          <p>info@earaldtradinget.com</p>

        </div>
      </div>
      <form className='form'>
        <div className='name_email'>
          <input className="input" id="name" type="text" name= "name" value={name} placeholder='Your Name' onChange={(e)=> setName(e.target.value)}/>
          <input className="input" id="emailin"type="text" name= "email" value={email} placeholder='Your Email'onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='subject'>
         <input className="input" id="subject"type="text" name= "subject" value={subject} placeholder='Subject'onChange={(e)=> setSubject(e.target.value)}/>
        </div>
        <div className='messages'>
          <textarea className="input" id="message"name= "message" value={message} placeholder='Message'onChange={(e)=> setMessage(e.target.value)}/>
        </div>
        <button className='submit' >Submit</button>

      </form>
      
    </div>
  )
}

export default Contact
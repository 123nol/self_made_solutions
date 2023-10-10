import React from 'react'
import { useState } from 'react'
import "./demo.css";
const DemoContact = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [subject, setSubject]= useState("")
  const [message, setMessage]= useState("")
  

  return (
    <div className='demoallcontacts'>
      <div className='demolinkHeader'>
        <h1>Contact</h1>
        <p>Reach us</p>
      </div>
      <div style={{height:"20vh", fontSize:"40px", fontWeight: "bold", marginTop: "45px",textAlign:"center",padding:"auto"}}>
      We’d love to talk about your right-now challenges<br/> and share our insights on how to conquer them.
      </div>
      <div className='democontacts'>
        <div className='democontact' id= "demoaddress">
          <h3>ADDRESS</h3>
          <p>G&B Building 3rd Floor,307</p>
          <p>Gurd Shola, Addis Ababa, Ethiopia</p>
          <p>Go to google maps</p>

        </div>
        <div className='democontact' id="demophone">
          <h3>PHONE NUMBER</h3>
          <p>+251 922 825 445</p>
          <p>+251 922 825 445</p>
        </div>
        <div className='democontact' id="demoemail">
          <h3>EMAIL</h3>
          <p>earaldtradinginfo@gmail.com</p>
          <p>info@earaldtradinget.com</p>

        </div>
      </div>
      {/* <form className='demoform'>
        <div className='demoname_email'>
          <input className="demoinput" id="demoname" type="text" name= "name" value={name} placeholder='Your Name' onChange={(e)=> setName(e.target.value)}/>
          <input className="demoinput" id="demoemailin"type="text" name= "email" value={email} placeholder='Your Email'onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='demosubject'>
         <input className="demoinput" id="demosubject"type="text" name= "subject" value={subject} placeholder='Subject'onChange={(e)=> setSubject(e.target.value)}/>
        </div>
        <div className='demomessages'>
          <textarea className="demoinput" id="demomessage"name= "message" value={message} placeholder='Message'onChange={(e)=> setMessage(e.target.value)}/>
        </div>
        <button className='demosubmit' >Submit</button>

      </form>
       */}
    </div>
  )
}

export default DemoContact
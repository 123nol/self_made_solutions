import React from 'react'
import { useState } from 'react'
import DemoContact from "./DemoContact"
const Contact = () => {
  
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [subject, setSubject]= useState("")
  const [message, setMessage]= useState("")
  

  return (
   <>
    <DemoContact />
   </>
  )
}

export default Contact
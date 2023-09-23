import React, { useState } from 'react'
import { FaComment,FaTimes, FaBars, FaPaperPlane } from 'react-icons/fa'
const Chat = () => {
  const [chat, setChat]=useState("");
  const [open, setOpen]=useState(false);
  const handleSend = ()=>{
    return setChat("");
  }
  return (
      
        <div>
          <div className='chat' style={{transform: open ? "translateY(0)" : "translateY(200%)"}}>
              <div className='header'>
              
                <h1>Hello</h1>
                
                <FaTimes onClick={()=>setOpen(!open)}/>
              </div>
              
              <div>
                <h4>welcome to our Portfolio website</h4>
              </div>
            
            <div>
              <p>we typically reply within a few minutes</p>
            </div>
            <div className='input_send'>
              <textarea value={chat} placeholder='enter your message' onChange={(e)=>setChat(e.target.value)}/>
              <FaPaperPlane onClick={()=>setChat("")} />
       
              
            </div>

          </div>
          <div className='comment' onClick={()=> setOpen(!open)} style={{transform: open ? "translateY(300%)" : "translateY(0)", zIndex: "0", transition: "0.3s ease-in"}}>
            <FaComment/>
            <h6>lets chat</h6>
          </div>
        </div>
     

    
  )
}

export default Chat
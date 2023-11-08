import React, { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import CommentIcon from "@mui/icons-material/Comment";

const Chat = () => {
  const [chat, setChat] = useState("");
  const [open, setOpen] = useState(false);
  // const handleSend = () => {
  //   return setChat("");
  // };
  return (
    <div className="chatbox" id="chat">
      <div
        className="chat"
        style={{ transform: open ? "translateY(0)" : "translateY(200%)" }}
      >
        <div className="header">
          <div className="headerContainer">
            <h1>Hello</h1>

            <FaTimes onClick={() => setOpen(!open)} />
          </div>

          <h4>Welcome to our Portfolio website</h4>

          <p>We typically reply within a few minutes</p>
        </div>
        <div className="input_send">
          <textarea
            value={chat}
            placeholder="enter your message"
            onChange={(e) => setChat(e.target.value)}
          />
          <FaPaperPlane onClick={() => setChat("")} />
        </div>
      </div>
      <div
        className="comment"
        onClick={() => setOpen(!open)}
        style={{
          transform: open ? "translateY(300%)" : "translateY(0)",
          zIndex: "0",
          transition: "0.3s ease-in",
          cursor: "pointer",
        }}
      >
        <CommentIcon
          htmlColor="rgb(230, 230, 230)"
          style={{ fontSize: "40px" }}
          className="commentIcon"
        />

        <p style={{ fontSize: "14px", color: "white" }} className="chatline">lets chat</p>
      </div>
    </div>
  );
};

export default Chat;

import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVert from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

function chat({ messages }) {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room</h3>
          <p>Last Seen at </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp"> {message.timestamp}</span>
          </p>
        ))}
        </div>

    
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a new message" type="text" />
          <button type="Submit">Submit</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default chat;

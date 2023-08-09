import React from 'react';
import './SidebarChat.css';
import { Avatar} from '@mui/material';


function SidebarChat() {
  return <div className="sidebarChat">

    <Avatar />
    <div className="sidebarChat__info">
      <h2>Room Name</h2>
      <p>Last message of room </p>
    </div>
  </div>

  
}

export default SidebarChat
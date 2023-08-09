import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar_searchContainer">

            <SearchIcon />
            <input placeholder="Seach or start new chat" type="text" />
          </div>
        </div>
        <div className="sidebar__chat">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />

        </div>



      </div>
    
  );
}

export default sidebar
import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js";
import axios from "./axios";




function App() {
  const [messages, setMessages] = useState([]);

 
  useEffect(()=> {

    axios.get('/messages/sync').then(response => { 
      console.log(response.data);
      setMessages(response.data);

      
    })



  },[])

  useEffect(() => {
  

    const pusher = new Pusher('d9feccc5c48d410834b4', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
    setMessages([...messages, newMessage]);


    return() => {
      channel.unbind_all();
      channel.unsubscribe();

    }
    });
  
  }, [messages]);



  return (
  <div className="app">
    <div className="app__body">
      <Sidebar />
      <Chat messages={messages} />
    
      </div>
   
    </div>
  );
}

export default App;

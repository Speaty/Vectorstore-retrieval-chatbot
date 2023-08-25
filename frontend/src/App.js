import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import './chatbot.css'

import config from './configs/chatbotConfig';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';

function App() {
  return (
    <div className="App">
      <p>DEMO IBM Productivity Accelerator</p>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default App;

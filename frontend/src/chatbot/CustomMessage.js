import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

const CustomMessage = (props) => {
  console.log("CUSTOM MESSAGE TEST");
  console.log(props);
  return (
    <>
        <div className='react-chatbot-kit-chat-bot-message'>
            Source: <a href={`C:\\Users\\speat\\projects\\ibm-project\\backend\\${props.payload.source}#page=${props.payload.page}`}>{props.payload.source}</a>
        </div>
    </>
  );
};

export default CustomMessage;
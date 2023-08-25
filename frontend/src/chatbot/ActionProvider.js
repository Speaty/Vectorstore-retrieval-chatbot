import React from "react";
import axios from "axios";
import { createCustomMessage } from "react-chatbot-kit";
import { CustomMessage } from "./CustomMessage"

const ActionProvider = ({ createChatBotMessage, setState, children}) => {
  const handleMessage = async (message) => { 
    try {
      const backendUrl = "http://127.0.0.1:5000/chat"
      const response = await axios.post(
        backendUrl, {
          method: "POST",
          body: JSON.stringify(message),
          headers: {}
      }).then(function (response) {
        console.log(response);
        
        // (<div>
        //   {response.data.answer}<br /><br />
        //   Source: {" "} 
        //     <a 
        //       href={`C:\\Users\\speat\\projects\\ibm-project\\backend\\${response.data.source}#page=${response.data.page}`}>
        //         {response.data.source}
        //     </a>
        //   </div>);

        // console.log(formattedData);
        const botMessage = createChatBotMessage(response.data.answer);
        const botMessageSource = createCustomMessage('test', 'custom', {payload: {answer: response.data.answer, source: response.data.source, page: response.data.page}});
        setState((previous) => ({
          ...previous, 
          messages: [...previous.messages, botMessage, botMessageSource],
        }));
      }).catch(function error() {
        console.log(error);
      });
      }

    catch (error) {
      console.error("Error sending message to backend: ", error)
      const errorMessage = createChatBotMessage("Sorry, I'm having trouble communicating with the backend.");
      setState((previous) => ({ 
        ...previous, 
        messages: [...previous.messages, errorMessage], 
    }));
  }
  }


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleMessage },
        });
      })}
    </div>
  )
}
 
 export default ActionProvider;
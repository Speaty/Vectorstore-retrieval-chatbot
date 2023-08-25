import { createChatBotMessage, createCustomMessage, createClientMessage } from "react-chatbot-kit";
import CustomMessage from "../chatbot/CustomMessage";

const botName = "IBM Productivity Accelerator"


const config = {

  
  initialMessages: [
    createChatBotMessage('Hi, I\'m the IBM Productivity Accelerator. \nI can help you safely navigate useful internal documents and templates.\nTo get started, simply state a problem you are facing, as in the example below.'),
    createClientMessage('Help me with managing a team remotely'),
    createChatBotMessage(`- Prioritize effective communication and collaboration tools to ensure remote workers can effectively collaborate with their team.
    - Encourage transparency and open communication within the organization to foster a culture that values diversity and flexibility.
    - Establish clear guidelines and expectations for remote work, including regular check-ins and progress updates.
    - Provide training and resources to help managers effectively manage remote teams and address any concerns or challenges that may arise.`),
    createCustomMessage('test', 'custom', {payload: {answer: "", source: "knowledge_base\\Effective DevOps.pdf", page: "369"}})
  ],
  botName: botName,
  customComponents: {
    botAvatar: (props) => <div className="react-chatbot-kit-bot-avatar-container" style={{margin: '0px 0px 10px 0px'}}><img style={{width: '40px', height: '40px', borderRadius: '50%'}} src="./bee.png"/></div>
  },
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  widgets: [],
}

export default config



import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './components/BotAvatar';
import Help from './components/Help';
import data from './data';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to FootprintZero! What can I help you with?`, {
    widget: 'help',
  })],
  botName: "FootprintZero",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  state: {
    checker: null,
    data,
    userData: {
      age: 0,
      category: "",
    },
  },
  widgets: [
    {
      widgetName: 'help',
      widgetFunc: (props) => <Help {...props} />,
    },
  ],
};

export default config;
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const cfc = () => {
      const message = createChatBotMessage('Our Calculator calculates your Carbon Footprint on the basis of Transport, Electricity, Diet, Waste and Water',{
        widget: 'help',
      });
      updateState(message);
  }

  const tips = () => {
    const message = createChatBotMessage('Some tips for sustainability are: 1. Walk, bike or take public transport 2. Switch to an electric vehicle 3. Reduce, reuse, repair and recycle 4. Eat more vegetables 5. Throw away less food',{
      widget: 'help'
    });
    updateState(message, 'preference');
  }

  const campaigns = () => {
    const message = createChatBotMessage('Our Campaigns include: 1. Save The Forests 2. Plastic Free Oceans 3. Clean Air Initiative 4. Clean the beaches 5. Energy Conservation',{
      widget: "help" ,
    });
    updateState(message);
  }

  const perRecom = () => {
    const message = createChatBotMessage("Let's see what personal recommendations you get to practice sustainability in your day to day life. Press enter to continue.");
    updateState(message, "age");
  }

  const enterAge = () => {
    const message = createChatBotMessage("Enter your age");
    updateState(message, "yes_age");
  }

  const finalResult = (todo) => {
    const message = createChatBotMessage(`Recommendations: ${todo}`,{
      widget: 'help',
    });
    updateState(message);
  }

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }))
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            cfc,
            tips,
            campaigns,
            perRecom,
            enterAge,
            finalResult,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
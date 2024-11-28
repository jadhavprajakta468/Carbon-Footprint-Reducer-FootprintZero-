import React from 'react';
import data from './data';

const MessageParser = ({ children, actions }) => {
  console.log(children.props.state.userData)
  const parse = (message) => {

    if (children.props.state.checker === "age"){
      actions.enterAge();
      children.props.state.userData.name = message;
    }

    if (children.props.state.checker === "yes_age" && Number(message)){
      children.props.state.userData.age = message;
      if (message > 5 && message <= 12) {
        children.props.state.userData.category = "kid";
      } else if (message > 12 && message <= 19) {
        children.props.state.userData.category = "teens";
      } else if (message > 19 && message <= 35) {
        children.props.state.userData.category = "yas";
      } else if (message > 35 && message <= 55) {
        children.props.state.userData.category = "adults";
      } else {
        children.props.state.userData.category = "seniors";
      }
      const cat = children.props.state.userData.category;
      actions.finalResult(data[cat].recom);
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
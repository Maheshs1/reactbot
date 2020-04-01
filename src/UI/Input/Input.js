import React from "react";

const input = props => {
  let inputView = null;
  console.log(props, inputView);

  switch (props.type) {
    case "text":
      inputView = <input type="text" {...props.typeProp} />;
      break;
    case "password":
      inputView = <input type="password" {...props.typeProp} />;
      break;
    case "color":
      inputView = <input type="color" {...props.typeProp} />;
      break;
    default:
      inputView = <input type="text" {...props.typeProp} />;
      break;
  }
  console.log(props, inputView);

  return inputView;
};

export default input;

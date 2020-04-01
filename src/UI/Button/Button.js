import React from "react";
import "./Button.css";

const button = props => {
  return (
    <button
      onClick={props.onClick}
      className={["Button", props.styling].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default button;

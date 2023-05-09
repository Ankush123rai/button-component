import React from "react";
import "./style.css";

export default function Button(props) {
  return (
    <div className="btn">
      <button onClick={props.handleClick}>{props.button}</button>
    </div>
  );
}

import React from "react";
import "./style.css";
import Button from './Button'
export default function App() {

  const handleClick=()=>{
    alert("from another file")
  }

  return (
    <div>
      <h3>Create a button in a separate file</h3>
      <Button button="CLICK ME" handleClick={handleClick}/>
    </div>
  );
}

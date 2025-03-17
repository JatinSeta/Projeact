import React, { useState } from "react";
import "./Event.css";
export default function Event() {
  const [Name, setName] = useState("");

  // onClickFunction
  function headelClick() {
    alert("Clicked Me");
  }
  // onChangeFunction
  function headelChange(e) {
    setName(e.target.value);
  }
  // onMouseoverFunction
  function headelHover() {
    console.warn("Your Hover Me ");
    setName("Jatin Seta");
  }
  // on Load Function
  // function headelLoad() {
  //   console.warn("Your Page Load");
  // }
  
  return (
    <>
      {/* Arrow function Syntex                      
            {() => alert()}
      */}
      <button onClick={() => alert("Arrow Function")}>Arrow Function </button>
      <br />
      {/* Click Event */}

      <button onClick={headelClick}>Click Me</button>
      <br />
      {/* onchange Event */}
      <input value={Name} onChange={headelChange}></input>
      <h1>Data Name :: {Name}</h1>
      {/*onmouseover Event */}
      <button
        value={Name}
        // onMouseEnter={t }
        onMouseDown={() => console.warn("Your Mouse Out")}
      >
        Hover Me
      </button>
      {/* <button onLoad={headelLoad}>On Load</button> */}
   
    </>
  );
}

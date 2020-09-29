import React from 'react';
import "./door.css";
import background from "../docs/white_back.jpg"
import fridge from "../docs/fridge.jpg";

const Door = () => {

  const hover = e => {
    const element = document.querySelector(".door");
  element.addEventListener("mouseover", () => console.log('Event: mouseover'));
    element.classList.toggle("doorOpen");
  }


  return (
  <div className="container">
    <img className='background image' src={background} alt="dessert" width="450" height="500" />
    <div className="backDoor" onMouseOver={hover} >
      <div className="door"> 
      <img  src={fridge} alt="question" width="250" height="400" />
      </div>
    </div>
  </div>
  
  )
};

export default Door;
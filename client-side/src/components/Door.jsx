import React from 'react';
import "./door.css";
import pic from "../docs/dessert.jpg"

const Door = () => {

  const hover = e => {
    const element = document.querySelector(".door");
  element.addEventListener("mouseover", () => console.log('Event: mouseover'));
    element.classList.toggle("doorOpen");
  }


  return (
  <div class="container">
    <img class='background image' src={pic} alt="dessert" width="400" height="500" />
    <div className="backDoor" onMouseOver={hover} >
      <div className="door"> 
      </div>
    </div>
  </div>
  
  )
};

export default Door;
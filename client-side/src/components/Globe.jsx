import React from 'react';
import "./globe.css";
import imageQuestion from "../docs/globe.jpg";
import pic from "../docs/dessert.jpg"


const Globe = () =>  {

  return (
    <div class="container">
      <img class='background image' src={pic} alt="dessert" width="400" height="500" />
      <img class="globe image" src={imageQuestion} alt="globe" width="300" height="300"/>
    </div>
  )
  

}

export default Globe;
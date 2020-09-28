import React from 'react';
import "./globe.css";
import imageQuestion from "../docs/world_white.jpg";

import background from "../docs/white_back.jpg"

const Globe = () =>  {

  return (
    <div class="container">
      <img class='background image' src={background} alt="dessert" width="450" height="500" />
      <img class="globe image" src={imageQuestion} alt="globe" width="320" height="325"/>
    </div>
  )
  

}

export default Globe;
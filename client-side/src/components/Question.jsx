import React from 'react';
import "./quiz.css";
import imageQuestion from "../docs/question.jpg";
import pic from "../docs/dessert.jpg"


const Question = () =>  {

  return (
    <div class="container">
      <img class='background image' src={pic} alt="dessert" width="400" height="500" />
      <img class='question image' src={imageQuestion} alt="question" width="300" height="300" />
    </div>
  
  )
}

export default Question;
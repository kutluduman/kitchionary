import React from 'react';
import "./quiz.css";
import imageQuestion from "../docs/question_white.jpg";
import background from "../docs/white_back.jpg"

const Question = () =>  {

  return (
    <div className="container1">
      <img className='background1 image1' src={background} alt="dessert" width="450" height="500" />
      <img className='question1 image1' src={imageQuestion} alt="question" width="300" height="300" />
      
    </div>
  
  )
}

export default Question;
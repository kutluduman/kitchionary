import React from 'react';
import "./quiz.css";
import imageQuestion from "../docs/question_white.jpg";
import background from "../docs/white_back.jpg"
import Button from '@material-ui/core/Button';

const Question = () =>  {

  return (
    <div className="container1">
      <img className='background1 image1' src={background} alt="dessert" width="450" height="700" />
      <img className='question1 image1' src={imageQuestion} alt="question" width="300" height="300" />
    <div>
        <h1 className="titleQuiz"> QUIZ MODE</h1>
        <div className="quizButton">
            <Button href="/quiz" variant="outlined" color="primary">
              Primary
            </Button>
            </div>
            </div>
    </div>
  
  )
}

export default Question;
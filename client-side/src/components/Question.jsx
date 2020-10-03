import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import "./quiz.css";
import imageQuestion from "../docs/question_white.jpg";
import background from "../docs/white_back.jpg"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Question = (props) =>  {
  const [redirect, setRedirect] = useState(false);

  const handleClick = (e) => {
    if (props.cookies.name) {
      setRedirect(true);
    }
  };

  if (!redirect) {
  return (
    <div className="container1">
      <img className='background1 image1' src={background} alt="dessert" width="450" height="825px" />
      <img className='question1 image1' src={imageQuestion} alt="question" width="300" height="300" />
    <div >
      <h1 className="titleQuiz"> QUIZ MODE</h1>
      <div className="description">
           <Typography  className="text" variant="h5" align="center" color="textSecondary" component="h3">
            Explore recipes to make with ingredients you already have at home!
            </Typography>
           </div>
            <br/>
            <div className="quizButton">      
          <Button onClick={handleClick} variant="outlined" color="primary">Explore</Button>
        </div>
      </div>
    </div>
  
  )
} else {
  return <Redirect to = {{ pathname: "/quiz" }} />;
}
}

export default Question;
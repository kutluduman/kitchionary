import React, {useState} from 'react';
import { Redirect, Link } from "react-router-dom";
import "./quiz.css";
import imageQuestion from "../docs/question_white.jpg";
import background from "../docs/white_back.jpg"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    color: 'orange',
    borderColor: 'orange',
    "&:hover": {
      backgroundColor: "orange[500]"
    },
    fontSize: '15px',
    marginTop: "55px"
  },
 
}));

const Question = (props) =>  {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);

  const handleClick = (e) => {
    // if (props.cookies.name) {
      setRedirect(true);
    // }
  };

  if (!redirect) {
  return (
    <div className="container1">
      <img className='background1 image1' src={background} alt="dessert" width="450" height="650px" />
      <img className='question1 image1' src={imageQuestion} alt="question" width="250" height="250" />
    <div >
      <h1 className="titleQuiz"> QUIZ MODE</h1>
      <div className="description">
           <Typography  className="text" variant="h5" align="center" color="textSecondary" component="h3">
            Have a craving and not sure what to make?
            </Typography>
            <Typography  className="text" variant="h5" align="center" color="textSecondary" component="h3">
       Let us help you decide!
            </Typography>
           </div>
            <br/>
            <div className="quizButton">      
          <Button onClick={handleClick} className={classes.button} variant="outlined" >Decide</Button>
        </div>
      </div>
    </div>
  
  )
} else {
  if (!props.cookies.name) {
    return (
      <div className="container1">
        <img className='background1 image1' src={background} alt="dessert" width="450" height="650px" />
        <img className='question1 image1' src={imageQuestion} alt="question" width="250" height="250" />
      <div >
        <h1 className="titleQuiz"> QUIZ MODE</h1>
        <div className="description">
             <Typography  className="text" variant="h5" align="center" color="textSecondary" component="h3">
              Have a craving and not sure what to make?
              </Typography>
              <Typography  className="text" variant="h5" align="center" color="textSecondary" component="h3">
         Let us help you decide!
              </Typography>
             </div>
              <br/>
              <div className="quizButton">   
            <Button href='#login' onClick={handleClick} size="large" className={classes.button} variant="outlined" >Decide</Button>
          </div>
        </div>
      </div>
    )
  } else {
    return <Redirect to = {{ pathname: "/quiz" }} />;
  }
}
}

export default Question;
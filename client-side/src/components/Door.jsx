import React from 'react';
import "./door.css";
import background from "../docs/white_back.jpg"
import fridge from "../docs/fridge.jpg";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Door = () => {
  const classes = useStyles();

  const hover = e => {
    const element = document.querySelector(".door");
  element.addEventListener("mouseover", () => console.log('Event: mouseover'));
    element.classList.toggle("doorOpen");
  }

  return (
    <div className="container">
      <img className='background image' src={background} alt="dessert" width="450" height="825" />
        <div className="backDoor" onMouseOver={hover} >
          <div className="door"> 
            <img  src={fridge} alt="question" width="250" height="400" />
            </div>
        <div> 
          <h1 className="titleFridge"> FRIDGE MODE</h1>
            <Typography variant="h5" align="center" color="textSecondary" component="h3">
            Explore recipes to make with ingredients you already have at home!
            </Typography>
            <br/>
            <div className="fridgeButton">
              <Button href="/fridge" size="large" variant="outlined" color="primary">Explore</Button>
            </div>
          </div>
        </div>
    </div>
  
  )
};

export default Door;
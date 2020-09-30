import React from 'react';
import "./door.css";
import background from "../docs/white_back.jpg"
import fridge from "../docs/fridge.jpg";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
      <img className='background image' src={background} alt="dessert" width="450" height="700" />
        <div className="backDoor" onMouseOver={hover} >
          <div className="door"> 
            <img  src={fridge} alt="question" width="250" height="400" />
            </div>
        <div className="descriptionFridge"> 
          <h1 className="titleFridge"> FRIDGE MODE</h1>
              <Button href="/fridge" variant="outlined" color="primary">
                Primary
              </Button>
            </div>
        </div>
    </div>
  
  )
};

export default Door;
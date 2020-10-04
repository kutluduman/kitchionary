import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import breakfast from "../docs/breakfast2.jpg";
import lunch from "../docs/lunch3.jpg";
import appetizer from "../docs/appetizer3.jpg";
import dinner from "../docs/dinner3.jpg";
import dessert from "../docs/dessert3.jpg";

import {lightBlue,red } from "@material-ui/core/colors";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import"../styles/QuizMealCheck.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: "center"
  }
}));



const QuizAvatar = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setInput({ ...props.inputState, [event.target.name]: event.target.checked });
  };


  return(
  <div className={classes.root}>
  <ul>
    <li><input onClick={handleChange} name='breakfast' type="checkbox" id="cb1" />
      <label for="cb1"><img className="mealPic" src={breakfast}/></label>
    </li>
    <li><input onClick={handleChange} name='lunch' type="checkbox" id="cb2" />
        <label for="cb2"><img className="mealPic"  src={lunch} /></label>
      </li>
      <li><input onClick={handleChange} name='appetizer' type="checkbox" id="cb3" />
        <label  for="cb3"><img className="mealPic" src={appetizer} /></label>
      </li>
      <li><input onClick={handleChange} name='dinner' type="checkbox" id="cb4" />
        <label for="cb4"><img className="mealPic"  src={dinner} /></label>
      </li>
      <li><input onClick={handleChange} name='dessert' type="checkbox" id="cb5" />
        <label for="cb5"><img className="mealPic"  src={dessert} /></label>
      </li>
    </ul>

  </div>
  )
}

export default QuizAvatar;
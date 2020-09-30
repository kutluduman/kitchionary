import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import breakfast from "../docs/breakfast.jpg";
import lunch from "../docs/lunch.jpg";
import appetizer from "../docs/appetizer.jpg";
import dinner from "../docs/dinner.jpg";
import dessert from "../docs/dessert.jpg";

import {lightBlue,red } from "@material-ui/core/colors";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import"./QuizMealCheck.css";

// const images = [
//   {
//     url: breakfast,
//     title:'Breakfast',
//     width: '20%'
//   },
//   {
//     url: lunch,
//     title:'Lunch',
//     width: '20%'
//   },
//   {
//     url: appetizer,
//     title:'Appetizers',
//     width: '20%'
//   },
//   {
//     url: dinner,
//     title:'Dinner',
//     width: '20%'
//   },
//   {
//     url: dessert,
//     title:'Desserts',
//     width: '20%'
//   }
// ]

// const breakfast = {
//   url: breakfastimg,
//   title:'Breakfast',
//   width: '20%'

// }


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
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
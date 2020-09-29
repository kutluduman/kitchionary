import React from 'react';
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

import "./fridgeMealCheck.css"
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



const FridgeAvatar = () => {
  const classes = useStyles();

  // const [state, setState] = React.useState({
  //   breakfast : false,
  //   lunch : false,
  //   appetizer : false,
  //   dinner : false,
  //   dessert : false,
  
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return(
  <div className={classes.root}>
  <ul>
    <li><input type="checkbox" id="cb1" />
      <label className="labelMeal" for="cb1"><img src={breakfast}/></label>
    </li>
    <li><input type="checkbox" id="cb2" />
        <label className="labelMeal"for="cb2"><img src={lunch} /></label>
      </li>
      <li><input type="checkbox" id="cb3" />
        <label  className="labelMeal" for="cb3"><img src={appetizer} /></label>
      </li>
      <li><input type="checkbox" id="cb4" />
        <label  className="labelMeal" for="cb4"><img src={dinner} /></label>
      </li>
      <li><input type="checkbox" id="cb5" />
        <label  className="labelMeal" for="cb5"><img src={dessert} /></label>
      </li>
    </ul>

  </div>


  )
}

export default FridgeAvatar;
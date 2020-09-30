import React, {useState, useReducer} from 'react';
import { Redirect } from "react-router-dom";
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue} from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';
import FridgeAvatar from './FridgeAvatar';
import FridgeCheckbox from './FridgeCheckbox';
import {Select,MenuItem, FormControl, InputLabel} from '@material-ui/core';
import axios from 'axios';

import IngredientForm from "./FridgeIngredientInput"

import "./fridgeMealCheck.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(5),
    width: '25ch',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
  },
  avatar: {
    marginTop: theme.spacing(8),
  },
  submit: {
    marginTop: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:theme.spacing(10)
  },
  formControl: {
    mindWidth:100,
    marginTop: theme.spacing(20),
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: orange[400],
    "&:hover": {
      backgroundColor: orange[500]
    },
  }
}))(Button);

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});


const FridgeForm = (props) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [inputState, setInputState] = useState({
    breakfast: false,
    lunch: false,
    appetizer: false,
    dinner: false,
    dessert: false,
    glutenFree : false,
    nutFree : false,
    dairyFree : false,
    vegetarian : false,
    vegan : false,
    name: '',
  });

  const handleSubmit = (e) => {
      e.preventDefault();

     const recipes = {
      breakfast: inputState.breakfast,
      lunch: inputState.lunch,
      appetizer: inputState.appetizer,
      dinner: inputState.dinner,
      dessert: inputState.dessert,
      glutenFree: inputState.glutenFree,
      nutFree: inputState.nutFree,
      dairyFree: inputState.dairyFree,
      vegetarian: inputState.vegetarian,
      vegan: inputState.vegan,
      name: inputState.name,
      quantity: inputState.quantity,
      unit: inputState.unit,
      }
  
  
    axios.post(`http://localhost:8080/recipes`, {recipes})
      .then(res => {
        console.log("resss", res.data.recipes)
        props.setMatchingRecipes(res.data.recipes)
        if (res.status === 200) {
          setRedirect(true)
        }
      })
      .catch(err => {
        // res.status(500).json({ error: err.message });
        // or set error state
      });

    };

  console.log(inputState)

if (!redirect) {
  return (
    <article className={classes.root}>
       <Helmet>
           <style>{'body { background-color: #d1e1ef; }'}</style>
         </Helmet>
      <form onSubmit={handleSubmit}>
        <h1 className='fridgeTitle'>Fridge Mode</h1>
        <h2 className='fridgeSubtitle'>Step One: What meal are you cooking?</h2>
        <div className={classes.avatar}>
          <FridgeAvatar setInput={setInputState} inputState={inputState}/>
        </div>
        <h2 className='fridgeSubtitle'>Step Two: Any dietary restrictions?</h2>
        <div className={classes.checkbox}>
          <FridgeCheckbox setInput={setInputState} inputState={inputState}/>
        </div>
        <h2 className='fridgeSubtitle'> Step Three: What ingredients do you want to cook with?</h2> 
          <IngredientForm setInput={setInputState} inputState={inputState}/>

        <div className={classes.submit}>
        <ColorButton size="large" type = 'submit' variant="contained" >Generate Recipes</ColorButton>
        </div>

        </form>
    </article>
  )
} else {
  return <Redirect to = {{ pathname: "/recipes" }} />;
}
}

export default FridgeForm;
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


const FridgeForm = () => {
  const classes = useStyles();
  

  // console.log('cb1', state.cb1);
  // console.log('cb2', state.cb2);
  // console.log('cb3', state.cb3);
  // console.log('cb4', state.cb4);
    //   cb4
    //  }
 
 
  //  axios.post(`http://localhost:8080/recipe`, { user })
  //    .then(res => {
  //     return <Redirect to = {{ pathname: "/??" }} />;
  //    })
  //    .catch(err => {
  //     res.status(500).json({ error: err.message });
  //     // or set error state
  //    })
  // };

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
    quantity: '',
    unit: '',
    culture:'',
  });


  console.log(inputState)

  return (
    <article className={classes.root}>
       <Helmet>
           <style>{'body { background-color: #d1e1ef; }'}</style>
         </Helmet>
      <form >
        <h1 className='fridgeTitle'>Fridge Mode</h1>
        <h2 className='fridgeSubtitle'>Step One: What meal are you cooking?</h2>
        <div className={classes.avatar}>
          <FridgeAvatar setInput={setInputState}/>
        </div>
        <h2 className='fridgeSubtitle'>Step Two: Any dietary restrictions?</h2>
        <div className={classes.checkbox}>
          <FridgeCheckbox setInput={setInputState}/>
        </div>
        <h2 className='fridgeSubtitle'> Step Three: What ingredients do you want to cook with?</h2> 
          <IngredientForm setInput={setInputState}/>

        <div className={classes.submit}>
        <ColorButton size="large" type = 'submit' variant="contained" >Generate Recipes</ColorButton>
        </div>

        </form>
    </article>
  )
}

export default FridgeForm;
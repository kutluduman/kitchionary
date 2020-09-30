import React from 'react';
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue} from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';
import FridgeAvatar from './FridgeAvatar';
import FridgeCheckbox from './FridgeCheckbox';
import {Select,MenuItem, FormControl, InputLabel} from 
'@material-ui/core';

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
  return (
    <article className={classes.root}>
       <Helmet>
           <style>{'body { background-color: #d1e1ef; }'}</style>
         </Helmet>
      <form>
        <h1 className='fridgeTitle'>Fridge Mode</h1>
        <h2 className='fridgeSubtitle'>Step One: What meal are you cooking?</h2>
        <div className={classes.avatar}>
          <FridgeAvatar/>
        </div>
        <h2 className='fridgeSubtitle'>Step Two: Any dietary restrictions?</h2>
        <div className={classes.checkbox}>
          <FridgeCheckbox/>
        </div>
        <h2 className='fridgeSubtitle'> Step Three: What ingredients do you want to cook with?</h2> 
          <IngredientForm/>

        <div className={classes.submit}>
        <ColorButton href="/fridge/recipes" size="large" type = 'submit' variant="contained" >Generate Recipes</ColorButton>
        </div>

        </form>
    </article>
  )
}

export default FridgeForm;
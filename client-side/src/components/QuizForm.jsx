import React, {useState, useReducer} from 'react';
import { Redirect } from "react-router-dom";
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue} from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';
import QuizAvatar from './QuizAvatar';
import FridgeCheckbox from './FridgeCheckbox';
import {Select,MenuItem, FormControl, InputLabel} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input1 from '@material-ui/core/Input';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import axios from 'axios';


// import IngredientForm from "./FridgeIngredientInput"

import "./QuizMealCheck.css"
import { fontSize } from '@material-ui/system';
import QuizButton from './QuizButton';

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
  },
  button: {
    margin: "20px",
    width: "250px",
    height: "100px",
    fontSize: "20px"
  },
  slider: {
    width: 1250,
    marginLeft: theme.spacing(40),
    display: "flex",
    justifyContent: 'center',
  },

  craving: {
    marginLeft: "100px",
    marginRight: "100px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }

}));

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: orange[400],
    "&:hover": {
      backgroundColor: orange[500],
      color: orange[500]
    },
  }
}))(Button);

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});


const QuizForm = (props) => {
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

  const [value, setValue] = React.useState(30);
  // const [value, setValue] = React.useState<number | string | Array<number | string>>(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleSliderChange = (event: any, newValue: number | number[]) => {
  //   setValue(newValue);
  // };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };


  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value === '' ? '' : Number(event.target.value));
  // };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  
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
   
      }
  
  
    axios.post(`http://localhost:8080/recipes`, {recipes})
      .then(res => {
        console.log("resss", res.data.recipes)
        props.setMatchingRecipes(res.data.recipes)
        if (res.status === 200) {
          setRedirect(true)
          console.log("redirect??", redirect)
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
           <style>{'body { background-color: #f3f3f3; }'}</style>
         </Helmet>
      <form onSubmit={handleSubmit}>
        <h1>Quiz Mode</h1>
        <h2 className='quizSubtitle'>I'm cooking...</h2>
        <div className={classes.avatar}>
          <QuizAvatar setInput={setInputState} inputState={inputState}/>
        </div>
        <h2 className='quizSubtitle'>I need it to be...</h2>
        
      
        
        <div className={classes.checkbox}>

        <QuizButton attribute="Gluten Free"/>
        <QuizButton attribute="Nut Free"/>
        <QuizButton attribute="Dairy Free"/>
        <QuizButton attribute="Vegetarian"/>
        <QuizButton attribute="Vegan"/>
        </div>
        <h2 className='quizSubtitle'> I'm craving...</h2> 
        <div className={classes.craving}>
          <QuizButton attribute="Salty"/>
          <QuizButton attribute="Greasy"/>
          <QuizButton attribute="Spicy"/>
          <QuizButton attribute="Sweet"/>
          <QuizButton attribute="Fruity"/>
          <QuizButton attribute="Healthy"/>
          <QuizButton attribute="Cold"/>  
          <QuizButton attribute="Hot"/>  
        </div>
        <h2 className='quizSubtitle'> I don't want...</h2> 
        <div className={classes.craving}>
          <QuizButton attribute="Salty"/>
          <QuizButton attribute="Greasy"/>
          <QuizButton attribute="Spicy"/>
          <QuizButton attribute="Sweet"/>
          <QuizButton attribute="Fruity"/>
          <QuizButton attribute="Healthy"/>
          <QuizButton attribute="Cold"/>  
          <QuizButton attribute="Hot"/>  
         </div>
        <h2 className='quizTime'> Time </h2> 
        <div>
        <div className={classes.slider}>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
        <AccessTimeIcon fontSize="medium" color="secondary"/>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max="200"
          />
        </Grid>
        <Grid item>
          <Input1
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 200,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>

        </div>

        <div className={classes.submit}>
        <ColorButton href="/recipes" size="large" type = 'submit' variant="contained" >Generate Recipes</ColorButton>
        </div>

        </form>
    </article>
  )
} else {
  return <Redirect to = {{ pathname: "/recipes" }} />;
}
}

export default QuizForm;

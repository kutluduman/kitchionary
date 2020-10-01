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
    width: 650,
    // marginLeft: theme.spacing(60),
    display: "flex",
    justifyContent: 'center',
  },

  craving: {
    marginLeft: "100px",
    marginRight: "100px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  valueHolder: {
    width: 50,
    height: 30,
    // marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(4),
    display: "Flex",
    justifyContent: "center"
  },


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
    isSalty: false,
    isGreasy: false,
    isSpicy: false,
    isSweet: false,
    isFruity: false,
    isHealthy: false,
    isCold: false,
    isHot: false,
    notSalty: false,
    notGreasy: false,
    notSpicy: false,
    notSweet: false,
    notFruity: false,
    notHealthy: false,
    notCold: false,
    notHot: false,
    time: 0,
  });



  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setInputState({ ...inputState, time: newValue });
    setValue(newValue);
  };


  console.log("SLIDER", inputState.time)

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

     const quizInfo = {
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
      isSalty: inputState.isSalty,
      isGreasy: inputState.isGreasy,
      isSpicy: inputState.isSpicy,
      isSweet: inputState.isSweet,
      isFruity: inputState.isFruity,
      isHealthy: inputState.isHealthy,
      isCold: inputState.isCold,
      isHot: inputState.isHot,
      notSalty: inputState.notSalty,
      notGreasy: inputState.notGreasy,
      notSpicy: inputState.notSalty,
      notSweet: inputState.notSweet,
      notFruity: inputState.notFruity,
      notHealthy: inputState.notHealthy,
      notCold: inputState.notCold,
      notHot: inputState.notHot,
      time: inputState.time,
      }
  
  
    axios.post(`http://localhost:8080/quiz`, {quizInfo})
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

  console.log("state", inputState)


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

        <QuizButton setInput={setInputState} inputState={inputState} name="glutenFree" attribute="Gluten Free"/>
        <QuizButton setInput={setInputState} inputState={inputState} name="nutFree" attribute="Nut Free" />
        <QuizButton setInput={setInputState} inputState={inputState} name="dairyFree" attribute="Dairy Free"/>
        <QuizButton setInput={setInputState} inputState={inputState} name= "vegetarian" attribute="Vegetarian"/>
        <QuizButton setInput={setInputState} inputState={inputState} name="vegan" attribute="Vegan"/>
        </div>
        <h2 className='quizSubtitle'> I'm craving...</h2> 
        <div className={classes.craving}>
          <QuizButton setInput={setInputState} inputState={inputState} name="isSalty" attribute="Salty"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="isGreasy"attribute="Greasy"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="isSpicy"attribute="Spicy"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="isSweet"attribute="Sweet"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="isFruity"attribute="Fruity"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="isHealthy"attribute="Healthy"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="isCold"attribute="Cold"/>  
          <QuizButton setInput={setInputState} inputState={inputState} name="isHot"attribute="Hot"/>  
        </div>
        <h2 className='quizSubtitle'> I don't want...</h2> 
        <div className={classes.craving}>
          <QuizButton setInput={setInputState} inputState={inputState} name="notSalty" attribute="Salty"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="notGreasy"attribute="Greasy"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="notSpicy"attribute="Spicy"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="notSweet" attribute="Sweet"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="notFruity" attribute="Fruity"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="notHealthy" attribute="Healthy"/>
          <QuizButton setInput={setInputState} inputState={inputState} name="notCold" attribute="Cold"/>  
          <QuizButton setInput={setInputState} inputState={inputState}  name="notHot" attribute="Hot"/>  
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
            name="time"
            aria-labelledby="input-slider"
            max="200"
          />
        </Grid>
        <Grid item>
          <Input1
            className={classes.valueHolder}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
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
        <ColorButton size="large" type = 'submit' variant="contained" >Generate Recipes</ColorButton>
        </div>

        </form>
    </article>
  )
} else {
  return <Redirect to = {{ pathname: "/recipes" }} />;
}
}

export default QuizForm;

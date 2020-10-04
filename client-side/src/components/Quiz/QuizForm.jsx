import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, black, lightBlue} from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';
import QuizAvatar from './QuizAvatar';
import FridgeCheckbox from './FridgeCheckbox';
import {Select,MenuItem, FormControl, InputLabel} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input1 from '@material-ui/core/Input';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import axios from 'axios';
import "../styles/QuizMealCheck.css"
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
    marginTop: theme.spacing(5),
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
   width:"800px",
    display: "flex",
    justifyContent: 'center',
    color: "orange",
  },
  craving: {
    marginLeft: "300px",
    marginRight: "300px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  valueHolder: {
    width: 50,
    height: 30,
    marginBottom: theme.spacing(4),
    display: "Flex",
    justifyContent: "center",
  },
  align: {
    display: "flex",
    justifyContent: 'center',
  },
  header : {
    padding: 50,
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
     backgroundColor: 'orange',
     boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)",
    width: '1200px', 
  }, 
  min: {
    marginBottom: "40px",
    fontSize: "18px",
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

const QuizForm = (props) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    props.setInputState({ ...props.inputState, time: newValue });
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

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
      breakfast: props.inputState.breakfast,
      lunch: props.inputState.lunch,
      appetizer: props.inputState.appetizer,
      dinner: props.inputState.dinner,
      dessert: props.inputState.dessert,
      glutenFree: props.inputState.glutenFree,
      nutFree: props.inputState.nutFree,
      dairyFree: props.inputState.dairyFree,
      vegetarian: props.inputState.vegetarian,
      vegan: props.inputState.vegan,
      isSalty: props.inputState.isSalty,
      isGreasy: props.inputState.isGreasy,
      isSpicy: props.inputState.isSpicy,
      isSweet: props.inputState.isSweet,
      isFruity: props.inputState.isFruity,
      isHealthy: props.inputState.isHealthy,
      isCold: props.inputState.isCold,
      isHot: props.inputState.isHot,
      notSalty: props.inputState.notSalty,
      notGreasy: props.inputState.notGreasy,
      notSpicy: props.inputState.notSalty,
      notSweet: props.inputState.notSweet,
      notFruity: props.inputState.notFruity,
      notHealthy: props.inputState.notHealthy,
      notCold: props.inputState.notCold,
      notHot: props.inputState.notHot,
      time: props.inputState.time,
      }
  
    axios.post(`http://localhost:8080/quiz`, {quizInfo})
      .then(res => {
        props.setMatchingRecipes(res.data.recipes)
        if (res.status === 200) {
          setRedirect(true)
        }
      })
      .catch(err => {
      });
    };

if (!redirect) {
  return (
    <article className={classes.root}>
       <Helmet>
           <style>{'body { background-color: #f3f3f3; }'}</style>
         </Helmet>
      <form onSubmit={handleSubmit}>
        <h1 className= {classes.header}>Quiz Mode</h1>
        <h2 className='quizSubtitle'>I'm cooking...</h2>
        <div className={classes.avatar}>
          <QuizAvatar setInput={props.setInputState} inputState={props.inputState}/>
        </div>
        <h2 className='quizSubtitle'>I need it to be...</h2>
        <div className={classes.checkbox}>
        <QuizButton setInput={props.setInputState} inputState={props.inputState} name="glutenFree" attribute="Gluten Free"/>
        <QuizButton setInput={props.setInputState} inputState={props.inputState} name="nutFree" attribute="Nut Free" />
        <QuizButton setInput={props.setInputState} inputState={props.inputState} name="dairyFree" attribute="Dairy Free"/>
        <QuizButton setInput={props.setInputState} inputState={props.inputState} name= "vegetarian" attribute="Vegetarian"/>
        <QuizButton setInput={props.setInputState} inputState={props.inputState} name="vegan" attribute="Vegan"/>
        </div>
        <h2 className='quizSubtitle'> I'm craving...</h2> 
        <div className={classes.craving}>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="isSalty" attribute="Salty"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="isGreasy"attribute="Greasy"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="isSpicy"attribute="Spicy"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="isSweet"attribute="Sweet"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="isFruity"attribute="Fruity"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="isHealthy"attribute="Healthy"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="isCold"attribute="Cold"/>  
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="isHot"attribute="Hot"/>  
        </div>
        <h2 className='quizSubtitle'> I don't want...</h2> 
        <div className={classes.craving}>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="notSalty" attribute="Salty"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="notGreasy"attribute="Greasy"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="notSpicy"attribute="Spicy"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="notSweet" attribute="Sweet"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="notFruity" attribute="Fruity"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="notHealthy" attribute="Healthy"/>
          <QuizButton setInput={props.setInputState} inputState={props.inputState} name="notCold" attribute="Cold"/>  
          <QuizButton setInput={props.setInputState} inputState={props.inputState}  name="notHot" attribute="Hot"/>  
         </div>
        <h2  className='quizSubtitle'> I only have... </h2> 
        <div className={classes.align}>
        <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
        <AccessTimeIcon fontSize="medium" colorName={classes.min}/>
        </Grid>
        <Grid item xs>
          <Slider
            className={classes.slider}
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
        <p className={classes.min}>minutes</p>
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

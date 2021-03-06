import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { orange } from "@material-ui/core/colors";
import FridgeAvatar from "./FridgeAvatar";
import FridgeCheckbox from "./FridgeCheckbox";
import axios from "axios";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IngredientForm from "./FridgeIngredientInput";
import "../../styles/fridgeMealCheck.css";

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: orange[300],
    "&:hover": {
      backgroundColor: orange[500],
    },
  },
}))(Button);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "2000px",
      display: "flex",
      justifyContent: 'center',
      marginTop: theme.spacing(10),
    },
    button: {
      marginTop: theme.spacing(5),
      marginRight: theme.spacing(1),
      height: '50px',
      width: '125px',
      fontSize: 15,
      color: "white"
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    stepper : {
      width:"1800px",
      marginLeft: '10%',

    },
    fridgeHeader : {
      padding: 50,
      paddingTop: 30,
      paddingBottom: 30,
      fontSize: 50,
      height: 50,
      display: 'flex',
      justifyContent: 'center',
       backgroundColor: 'orange',
      width: '1200px', 
      marginTop: "150px",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',     
    }, 
    quiz : {
      fontSize: "30px",
    },
    generate: {
      width: "60px"
    },
  })
);

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

const FridgeForm = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [dietaryRestrictions, setDietaryRestrictions] = useState({
    glutenFree: false,
    nutFree: false,
    dairyFree: false,
    vegetarian: false,
    vegan: false
  });
  const [ingredient, setIngredient] = useState({
    one: '',
    two: '',
    three: '',
  });

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipes = {
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
      ingredient_one: ingredient.one,
      ingredient_two: ingredient.two,
      ingredient_three: ingredient.three,
    };

    axios
      .post(`http://localhost:8080/recipes`, { recipes })
      .then((res) => {
        props.setMatchingRecipes(res.data.recipes);
        if (res.status === 200) {
          setRedirect(true);
        }
      })
      .catch((err) => {
      });

    props.setInputState({
      breakfast: false,
      lunch: false,
      appetizer: false,
      dinner: false,
      dessert: false,
      glutenFree: false,
      nutFree: false,
      dairyFree: false,
      vegetarian: false,
      vegan: false,
    })
    setDietaryRestrictions({
      glutenFree: false,
      nutFree: false,
      dairyFree: false,
      vegetarian: false,
      vegan: false
    });
    setIngredient({
      one: '',
      two: '',
      three: '',
    });
  };

  if (!redirect) {
    return (
        <div >
          <div>
          <h1 className={classes.fridgeHeader}> Fridge Mode</h1> 
          </div>
          <div>
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step className={classes.stepper} key="key">
              <StepLabel>
                <h2 className={classes.quiz}>What meal are you cooking?</h2>
              </StepLabel>
              <StepContent>
                <Typography>
                  <div className={classes.avatar}>
                    <FridgeAvatar
                      setInput={props.setInputState}
                      inputState={props.inputState}
                    />
                  </div>
                </Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <ColorButton
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </ColorButton>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step className={classes.stepper} key="key">
              <StepLabel>
                <h2 className={classes.quiz}>Any dietary restrictions?</h2>
              </StepLabel>
              <StepContent>
                <div className={classes.checkbox}>
                  <FridgeCheckbox
                    setInput={props.setInputState}
                    inputState={props.inputState}
                    dietaryRestrictions={dietaryRestrictions}
                    setDietaryRestrictions={setDietaryRestrictions}
                  />
                </div>
                <div className={classes.actionsContainer}>
                  <div>
                    <ColorButton
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </ColorButton>
                    <ColorButton
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </ColorButton>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step className={classes.stepper} key="key">
              <StepLabel>
                <h2 className={classes.quiz}>
                  What ingredients do you want to cook with?
                </h2>
              </StepLabel>
              <StepContent>
                <IngredientForm
                  setInput={props.setInputState}
                  inputState={props.inputState}
                  ingredient={ingredient}
                  setIngredient={setIngredient}
                />
                <div className={classes.actionsContainer}>
                  <div>
                    <ColorButton
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </ColorButton>
                    <ColorButton
                      onClick={handleSubmit}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "Generate Recipes"
                        : "Next"}
                    </ColorButton>
                  </div>
                </div>
              </StepContent>
            </Step>
          </Stepper>
          </div>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <ColorButton
                onClick={handleSubmit}
                size="large"
                type="submit"
                variant="outlined"
              >
                Generate Recipes
              </ColorButton>
            </Paper>
          )}
        </div>
    );
  } else {
    return <Redirect to={{ pathname: "/recipes" }} />;
  }
};

export default FridgeForm;

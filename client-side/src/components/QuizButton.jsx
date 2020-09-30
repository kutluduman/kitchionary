import React, {useState, useReducer} from 'react';
import Button from '@material-ui/core/Button';

import "./QuizButton.css"
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const QuizButton = (props) => {
 
  return (
  <label>
    <input className="input" type="checkbox"/>
    <Button className="button" variant="outlined" size="large" color="secondary">
         {props.attribute}
    </Button>
  </label>
  )
}

export default QuizButton;
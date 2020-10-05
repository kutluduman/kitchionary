import React from 'react';
import Button from '@material-ui/core/Button';
import "../../styles/QuizButton.css"

const QuizButton = (props) => {
 
  const handleChange = (event) => {
    props.setInput({ ...props.inputState, [event.target.name]: event.target.checked });
  };

  return (
  <label>
    <input onClick={handleChange} name={props.name} className="input" type="checkbox" />
    <Button  className="button" variant="outlined" size="large">
         {props.attribute}
    </Button>
  </label>
  )
}

export default QuizButton;
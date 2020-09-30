import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const FridgeCheckbox = (props) => {

  const handleChange = (event) => {
    props.setInput({ ...props.inputState, [event.target.name]: event.target.checked });
  };


  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.glutenFree}
            onChange={handleChange}
            name="glutenFree"
            color="primary"
            
          />
        }
        label="Gluten Free"
      />
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.nutFree}
            onChange={handleChange}
            name="nutFree"
            color="primary"
          />
        }
        label="Nut Free"
      />
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.dairyFree}
            onChange={handleChange}
            name="dairyFree"
            color="primary"
          />
        }
        label="Dairy Free"
      />
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.vegetarian}
            onChange={handleChange}
            name="vegetarian"
            color="primary"
          />
        }
        label="Vegetarian"
      />
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.vegan}
            onChange={handleChange}
            name="vegan"
            color="primary"
          />
        }
        label="Vegan"
      />
    </FormGroup>
      
  )

}

export default FridgeCheckbox;

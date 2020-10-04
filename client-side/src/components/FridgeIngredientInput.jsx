import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 0
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40ch',
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "orange",
      }
    
  },
}));



export default function IngredientForm(props) {
  const classes = useStyles(); 

  const handleChange = (event) => {
    props.setInput({ ...props.inputState, [event.target.name]: event.target.value });
  };



  return (
    <div>

 <form>
 <TextField
          // label="Name"
          onChange={handleChange}
          placeholder= "Ingredients"
          id=""
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name= "name"
        />
      </form>   

    </div>
  );
}
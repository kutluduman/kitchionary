import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    props.setIngredient({ ...props.ingredient, [event.target.name]: event.target.value });
  };

  return (
    <div>
 <form>
        <TextField
          onChange={handleChange}
          placeholder= "Ingredients"
          id=""
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name= "one"
        />
        <TextField
          onChange={handleChange}
          placeholder= "Ingredients"
          id=""
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name= "two"
        />
        <TextField
          onChange={handleChange}
          placeholder= "Ingredients"
          id=""
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          name= "three"
        />
      </form>   
    </div>
  );
}
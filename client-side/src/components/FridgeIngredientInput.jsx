import React from 'react';
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
    marginTop: theme.spacing(5),
    width: '25ch',
  },
}));



export default function IngredientForm() {
  const classes = useStyles();
  const [culture, setCulture] = React.useState('');
  const [unit, setUnit] = React.useState('');
  const handleCulture = (event) => {
    setCulture(event.target.value);
  };
  const handleUnit = (event) => {
    setUnit(event.target.value);
  };

  return (
    <div>
{/* NAME */}
<FormControl variant="outlined" className={classes.formControl}>
 <TextField
          label="Name"
          id="outlined-margin-normal"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </FormControl>  
  {/* AMOUNT   */}
 <FormControl variant="outlined" className={classes.formControl}>
 <TextField
          label="Quantity"
          id="outlined-margin-normal"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </FormControl>  

{/* UNIT   */}
      <FormControl   className={classes.textField} variant="outlined" className={classes.textField}>
        <InputLabel  id="demo-simple-select-outlined-label">Unit</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={unit}
          onChange={handleUnit}
          label="Unit"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'tbsp'}>tbsp</MenuItem>
          <MenuItem value={'tsp'}>tsp</MenuItem>
          <MenuItem value={'cup'}>cup</MenuItem>
          <MenuItem value={'oz'}>oz</MenuItem>
          <MenuItem value={'lb'}>lb</MenuItem>
          <MenuItem value={'g'}>g</MenuItem>
          <MenuItem value={'clove'}>clove</MenuItem>
          <MenuItem value={'package'}>package</MenuItem>
          <MenuItem value={'can'}>can</MenuItem>
        </Select>
      </FormControl>

  {/* CUISINE */}

  <FormControl variant="outlined" className={classes.textField}>
        <InputLabel id="demo-simple-select-outlined-label">Cuisine</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={culture}
          onChange={handleCulture}
          label="Culture"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Mexican'}>Mexican</MenuItem>
          <MenuItem value={'Italian'}>Italian</MenuItem>
          <MenuItem value={'Chinese'}>Chinese</MenuItem>
          <MenuItem value={'American'}>American</MenuItem>
          <MenuItem value={'Japanese'}>Japanese</MenuItem>
          <MenuItem value={'Mediterranean'}>Mediterranean</MenuItem>
          <MenuItem value={'Spanish'}>Spanish</MenuItem>
          <MenuItem value={'Turkish'}>Turkish</MenuItem>
         </Select>
      </FormControl>
    </div>
  );
}
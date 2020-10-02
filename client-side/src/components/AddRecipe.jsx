import React,{useState} from 'react';
import { Redirect } from "react-router-dom";
import {createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue } from "@material-ui/core/colors";
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import InputLabel from '@material-ui/core/InputLabel';
// import Login from "./Login";
// import  useLogin from './useLogin';
// import  toggle from './useLogin';
// import  useRegister from './useRegister';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
    
  },
  textField: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    width: '25ch',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
  },
  phoneNumber: {
    marginLeft: theme.spacing(22),
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
  },
  addTitle: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "40px"
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





const AddRecipe = (props) => {
  const classes = useStyles();

  // DROPDOWN



  const [error, setError] = useState('');
  const [inputRecipe, setInputRecipe] = useState({
    user_id: props.cookies,
    name: '',
    img_url: '',
    description: '',
    directions_one: '',
    directions_two: '',
    directions_three: '',
    directions_four: '',
    directions_five: '',
    directions_six: '',
    ingredients_one: '',
    ingredients_two: '',
    ingredients_three: '',
    ingredients_four: '',
    ingredients_five: '',
    amount_one: null,
    amount_two: null,
    amount_three: null,
    amount_four: null,
    amount_five: null,
    unit_one: null,
    unit_two: null,
    unit_three: null,
    unit_four: null,
    unit_five: null,
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
    isSalty: false,
    isGreasy: false,
    isSpicy: false,
    isSweet: false,
    isFruity: false,
    isHealthy: false,
    isCold: false,
    isHot: false,
    time: 0,
  });

  // const {loginShowing, toggleLogin} = useLogin();
  // const {registerShowing, toggleRegister} = useRegister();
  

  // function validate() {
  //   if(!firstName){
  //     setError("First Name is required!");
  //     return false;
  //   }
  //   if(!lastName){
  //     setError("Last Name is required!");
  //     return false;
  //   }
  //   if(!email){
  //     setError("Email is required!");
  //     return false;
  //   }
  //   if(!password){
  //     setError("Password is required!");
  //     return false;
  //   }
  //   if(!phoneNumber){
  //     setError("Phone Number is required!");
  //     return false;
  //   }

    
  //   const user = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     email: email,
  //     password: password,
  //     phone_number: phoneNumber
  //   };

  //   axios.post(`http://localhost:8080/register`, user)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       if (res.status === 200) {
  //         setCookie('name', user.email, {path: '/'});
  //       }
  //     })
  //     .catch(err => {
  //       setError("Account already exists!");
  //     })
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: '',
      img_url: '',
      description: '',
      directions_one: '',
      directions_two: '',
      directions_three: '',
      directions_four: '',
      directions_five: '',
      directions_six: '',
      ingredients_one: '',
      ingredients_two: '',
      ingredients_three: '',
      ingredients_four: '',
      ingredients_five: '',
      amount_one: null,
      amount_two: null,
      amount_three: null,
      amount_four: null,
      amount_five: null,
      unit_one: null,
      unit_two: null,
      unit_three: null,
      unit_four: null,
      unit_five: null,
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
      isSalty: false,
      isGreasy: false,
      isSpicy: false,
      isSweet: false,
      isFruity: false,
      isHealthy: false,
      isCold: false,
      isHot: false,
      time: 0,
    }

      axios.post(`http://localhost:8080/add`, newRecipe)
      .then(res => {
        console.log(res);
        console.log("resfromadd", res.data);
        if (res.status === 200) {
          // setCookie('name', user.email, {path: '/'});
        }
      })
      .catch(err => {
        // setError("Account already exists!");
      })
  // }

    setInputRecipe({
      name: '',
      img_url: '',
      description: '',
      directions_one: '',
      directions_two: '',
      directions_three: '',
      directions_four: '',
      directions_five: '',
      directions_six: '',
      ingredients_one: '',
      ingredients_two: '',
      ingredients_three: '',
      ingredients_four: '',
      ingredients_five: '',
      amount_one: null,
      amount_two: null,
      amount_three: null,
      amount_four: null,
      amount_five: null,
      unit_one: null,
      unit_two: null,
      unit_three: null,
      unit_four: null,
      unit_five: null,
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
      isSalty: false,
      isGreasy: false,
      isSpicy: false,
      isSweet: false,
      isFruity: false,
      isHealthy: false,
      isCold: false,
      isHot: false,
      time: 0,
    })
  };


  const handleChangeUnit = (event) => {
    setInputRecipe({ ...inputRecipe, [event.target.name]: event.target.value });
  };


  const handleChangeName = (e) => {
    setInputRecipe({ ...inputRecipe, name: e.target.value });
  }

  const handleChangeDescription = (e) => {
    setInputRecipe({ ...inputRecipe, description: e.target.value });
  }

  const handleChangeImg = (e) => {
    setInputRecipe({ ...inputRecipe, img_url: e.target.value });
  }
  const handleChangeIngredientsOne = (e) => {
    setInputRecipe({ ...inputRecipe, ingredients_one: e.target.value });
  }

  const handleChangeIngredientsTwo = (e) => {
    setInputRecipe({ ...inputRecipe, ingredients_two: e.target.value });
  }

  const handleChangeIngredientsThree = (e) => {
    setInputRecipe({ ...inputRecipe, ingredients_three: e.target.value });
  }
  
  const handleChangeIngredientsFour = (e) => {
    setInputRecipe({ ...inputRecipe, ingredients_four: e.target.value });
  }

  const handleChangeIngredientsFive = (e) => {
    setInputRecipe({ ...inputRecipe, ingredients_five: e.target.value });
  }

  const handleChangeAmountOne = (e) => {
    setInputRecipe({ ...inputRecipe, amount_one: e.target.value });
  }

  const handleChangeAmountTwo = (e) => {
    setInputRecipe({ ...inputRecipe, amount_two: e.target.value });
  }

  const handleChangeAmountThree = (e) => {
    setInputRecipe({ ...inputRecipe, amount_three: e.target.value });
  }
  
  const handleChangeAmountFour = (e) => {
    setInputRecipe({ ...inputRecipe, amount_four: e.target.value });
  }

  const handleChangeAmountFive = (e) => {
    setInputRecipe({ ...inputRecipe, amount_five: e.target.value });
  }

  const handleChangeUnitOne = (e) => {
    setInputRecipe({ ...inputRecipe, unit_one: e.target.value });
  }

  const handleChangeUnitTwo = (e) => {
    setInputRecipe({ ...inputRecipe, unit_two: e.target.value });
  }

  const handleChangeUnitThree = (e) => {
    setInputRecipe({ ...inputRecipe, unit_three: e.target.value });
  }
  
  const handleChangeUnitFour = (e) => {
    setInputRecipe({ ...inputRecipe, unit_four: e.target.value });
  }

  const handleChangeUnitFive = (e) => {
    setInputRecipe({ ...inputRecipe, unit_five: e.target.value });
  }

  const handleChangeDirectionsOne = (e) => {
    setInputRecipe({ ...inputRecipe, directions_one: e.target.value });
  }

  const handleChangeDirectionsTwo = (e) => {
    setInputRecipe({ ...inputRecipe, directions_two: e.target.value });
  }

  const handleChangeDirectionsThree = (e) => {
    setInputRecipe({ ...inputRecipe, directions_three: e.target.value });
  }
  
  const handleChangeDirectionsFour = (e) => {
    setInputRecipe({ ...inputRecipe, directions_four: e.target.value });
  }

  const handleChangeDirectionsFive = (e) => {
    setInputRecipe({ ...inputRecipe, directions_five: e.target.value });
  }
  
  const handleChangeDirectionsSix = (e) => {
    setInputRecipe({ ...inputRecipe, directions_six: e.target.value });
  }

  // if (!cookies.name){
  return (
    <section>
    <div role="dialog">
      <div>
     
      <h2 className={classes.addTitle}>Add New Recipe</h2>
    <div className={classes.root}>
      <div>
        <br/>
        {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
      {/* NAME */}
        <TextField onChange={handleChangeName}
          value={inputRecipe.name}
          id="outlined-margin-normal"
          placeholder="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }  
        }
        />

        {/* Description */}
         <TextField onChange={handleChangeDescription}
          value={inputRecipe.description}
          id="outlined-margin-normal"
          placeholder="Description"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />
        {/* Image */}
        <div>
        <TextField onChange={handleChangeImg}
          value={inputRecipe.img_url}
          id="outlined-margin-normal"
          placeholder="Image URL"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />

        <div>
          <div>
       {/* INGREDIENTS */}
       <TextField onChange={handleChangeIngredientsOne}
          value={inputRecipe.ingredients_one}
          id="outlined-margin-normal"
          placeholder="Ingredient 1"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />

  
      <FormControl   className={classes.textField} variant="outlined">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.unit}
          onChange={handleChangeUnit}
          label="Unit"
          name='unit'
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
    </div>

    <div>
      <TextField onChange={handleChangeIngredientsTwo}
        value={inputRecipe.ingredients_two}
        // label="Password"
        id="outlined-margin-normal"
        placeholder="Ingredient 2"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          style: { color: 'orange' },
        }}
      /> 
      <FormControl   className={classes.textField} variant="outlined">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.unit}
          onChange={handleChangeUnit}
          label="Unit"
          name='unit'
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
     </div>

     <div>
      <TextField onChange={handleChangeIngredientsThree}
        value={inputRecipe.ingredients_three}
        // label="Password"
        id="outlined-margin-normal"
        placeholder="Ingredient 3"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          style: { color: 'orange' },
        }}
      /> 

      <FormControl   className={classes.textField} variant="outlined">
        <Select
         
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         value={props.unit}
         onChange={handleChangeUnit}
         label="Unit"
         name='unit'
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
    </div>

    <div>
      <TextField onChange={handleChangeIngredientsFour}
        value={inputRecipe.ingredients_four}
        // label="Password"
        id="outlined-margin-normal"
        placeholder="Ingredient 4"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          style: { color: 'orange' },
        }}
      /> 

      <FormControl   className={classes.textField} variant="outlined">
        <Select
         
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         value={props.unit}
         onChange={handleChangeUnit}
         label="Unit"
         name='unit'
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
    </div>

    <div>
      <TextField onChange={handleChangeIngredientsFive}
        value={inputRecipe.ingredients_five}
        // label="Password"
        id="outlined-margin-normal"
        placeholder="Ingredient 5"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          style: { color: 'orange' },
      }}
      /> 
      <FormControl   className={classes.textField} variant="outlined">
        <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={props.unit}
        onChange={handleChangeUnit}
        label="Unit"
        name='unit'
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
     </div>
  </div>

  <div>
        {/* DIRECTIONS */}
         <TextField onChange={handleChangeDirectionsOne}
          value={inputRecipe.directions_one}
          // label="Password"
          id="outlined-margin-normal"
          placeholder="Direction 1"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />

        <TextField onChange={handleChangeDirectionsTwo}
          value={inputRecipe.directions_two}
          // label="Password"
          id="outlined-margin-normal"
          placeholder="Direction 2"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        /> 


        <TextField onChange={handleChangeDirectionsThree}
        value={inputRecipe.directions_three}
        // label="Password"
        id="outlined-margin-normal"
        placeholder="Direction 3"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          style: { color: 'orange' },
        }}
      /> 


      <TextField onChange={handleChangeDirectionsFour}
      value={inputRecipe.directions_four}
      // label="Password"
      id="outlined-margin-normal"
      placeholder="Direction 4"
      className={classes.textField}
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        style: { color: 'orange' },
      }}
    /> 

    <TextField onChange={handleChangeDirectionsFive}
    value={inputRecipe.directions_five}
    // label="Password"
    id="outlined-margin-normal"
    placeholder="Direction 5"
    className={classes.textField}
    margin="normal"
    variant="outlined"
    InputLabelProps={{
      style: { color: 'orange' },
    }}
  /> 

  <TextField onChange={handleChangeDirectionsSix}
  value={inputRecipe.directions_six}
  // label="Password"
  id="outlined-margin-normal"
  placeholder="Direction 6"
  className={classes.textField}
  margin="normal"
  variant="outlined"
  InputLabelProps={{
    style: { color: 'orange' },
  }}
  /> 
  </div>


        </div>
       
        <br/>
        <div className={classes.root}>
        <ColorButton type='submit' variant="contained" color="primary">Add</ColorButton>
        </div>

      </form>
        </div>
        </div>
      </div>
    </div>
    </section>
  )
//   } else {
//     return <Redirect to = {{ pathname: "/" }} />;
//   }
}

export default AddRecipe;
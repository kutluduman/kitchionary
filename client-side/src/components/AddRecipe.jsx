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





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "row",
  
  },
  textField: {
    
    width: '60ch',
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
    fontSize: "30px",
    width: '100%',
    paddingBottom: '15px',
    borderBottom: "#8080801c solid"
  },

  cont: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
   marginRight: '400px',
   marginLeft:'25%'
    
  },

  directions: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
 
  },

  ingredients:{
    display: "flex",
    flexDirection: "row",
  

  },
 
  description: {
    width: "800px",
    marginLeft: '45px',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
  },

  name: {
    width: "550px",
 marginLeft: '45px',
 "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
  borderColor: "orange",
},
 
  },

  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
    width: '1000px',
    marginTop: '30px',
    marginBottom: '30px'
  },

  subheading: {
    fontSize: '15px',
    marginLeft: '40px'
 
  },

  unit: {
    marginTop: "15px",
    width: "120px"
  },

  step: {
    width: "750px",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
  },

  ingredient: {
    width: "550px",
    marginLeft: '150px',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
  },

  amount: {
    marginLeft: '20px',
    marginRight: '20px',
    width: "140px",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "row",
    marginBottom: "40px",
    marginTop: "40px"
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
    user: props.cookies,
    name: '',
    img_url: '',
    description: '',
    directions_one: '',
    directions_two: '',
    directions_three: '',
    directions_four: '',
    directions_five: '',
    directions_six: '',
    ingredients: [],
    amount: [],
    unit: [],
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


  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      user: props.cookies,
      name: '',
      img_url: '',
      description: '',
      directions_one: '',
      directions_two: '',
      directions_three: '',
      directions_four: '',
      directions_five: '',
      directions_six: '',
      ingredients: [],
      amount: [],
      unit: [],
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
      ingredients: [],
      amount: [],
      unit: [],
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
  const handleChangeIngredients = (e) => {
    // setInputRecipe({ ...inputRecipe, ingredients_one: e.target.value });
    inputRecipe.ingredients.push(e.target.value)
  }

  // const handleChangeIngredientsTwo = (e) => {
  //   setInputRecipe({ ...inputRecipe, ingredients_two: e.target.value });
  // }

  // const handleChangeIngredientsThree = (e) => {
  //   setInputRecipe({ ...inputRecipe, ingredients_three: e.target.value });
  // }
  
  // const handleChangeIngredientsFour = (e) => {
  //   setInputRecipe({ ...inputRecipe, ingredients_four: e.target.value });
  // }

  // const handleChangeIngredientsFive = (e) => {
  //   setInputRecipe({ ...inputRecipe, ingredients_five: e.target.value });
  // }

  const handleChangeAmount = (e) => {
    // setInputRecipe({ ...inputRecipe, amount_one: e.target.value });
    inputRecipe.amount.push(e.target.value)
  }

  // const handleChangeAmountTwo = (e) => {
  //   setInputRecipe({ ...inputRecipe, amount_two: e.target.value });
  // }

  // const handleChangeAmountThree = (e) => {
  //   setInputRecipe({ ...inputRecipe, amount_three: e.target.value });
  // }
  
  // const handleChangeAmountFour = (e) => {
  //   setInputRecipe({ ...inputRecipe, amount_four: e.target.value });
  // }

  // const handleChangeAmountFive = (e) => {
  //   setInputRecipe({ ...inputRecipe, amount_five: e.target.value });
  // }

  const handleChangeUnitOne = (e) => {
    // setInputRecipe({ ...inputRecipe, unit_one: e.target.value });
    inputRecipe.unit.push({0: e.target.value});
  }

  const handleChangeUnitTwo = (e) => {
    // setInputRecipe({ ...inputRecipe, unit_two: e.target.value });
    inputRecipe.unit.push({1: e.target.value});
  }

  const handleChangeUnitThree = (e) => {
    // setInputRecipe({ ...inputRecipe, unit_three: e.target.value });
    inputRecipe.unit.push({2: e.target.value});
  }
  
  const handleChangeUnitFour = (e) => {
    // setInputRecipe({ ...inputRecipe, unit_four: e.target.value });
    inputRecipe.unit.push({3: e.target.value});
  }

  const handleChangeUnitFive = (e) => {
    // setInputRecipe({ ...inputRecipe, unit_five: e.target.value });
    inputRecipe.unit.push({4: e.target.value});
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
      <div>
        <div>
            <div className={classes.cont}>
              <div className={classes.form}>
              <h2 className={classes.addTitle}>Add New Recipe</h2>
                <br/>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                  {/* NAME */}
                <div className={classes.cont}>
                <h1 className={classes.subheading}>Recipe Name:</h1>
                  <TextField onChange={handleChangeName}
                    value={inputRecipe.name}
                    id="outlined-margin-normal"
                    placeholder="Name"
                    className={classes.name}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: 'orange' },
                    }}
                  />
                  </div>

                    {/* Image */}
                    <div className={classes.cont}>
                  <h1 className={classes.subheading}>Image URL:</h1>
                  <TextField onChange={handleChangeImg}
                    value={inputRecipe.img_url}
                    id="outlined-margin-normal"
                    placeholder="Image URL"
                    className={classes.name}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: 'orange' },
                    }}
                  />
                </div>
                  <div className={classes.cont}>
                  <h1 className={classes.subheading}>Recipe Description:</h1>
                  <TextField onChange={handleChangeDescription}
                    value={inputRecipe.description}
                    id="outlined-margin-normal"
                    placeholder="Description"
                    className={classes.description}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: 'orange' },
                    }}
                  />
                  </div>
                  <div className={classes.cont}>
                  <h1 className={classes.subheading}>Ingredients:</h1>
                    <div className={classes.ingredients}> 
                      <TextField onChange={handleChangeIngredients}
                        value={inputRecipe.ingredients[0]}
                        id="outlined-margin-normal"
                        placeholder="Ingredient 1"
                        className={classes.ingredient}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      />
                         <TextField onChange={handleChangeAmount}
                        value={inputRecipe.amount[0]}
                        id="outlined-margin-normal"
                        placeholder="Quantity"
                        className={classes.amount}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      />
                      <FormControl  className={classes.textField} variant="outlined">
                        <Select 
                          className={classes.unit}
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={props.unit}
                          onChange={handleChangeUnitOne}
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

                    <div className={classes.ingredients}>
                      <TextField onChange={handleChangeIngredients}
                        value={inputRecipe.ingredients[1]}
                        // label="Password"
                        id="outlined-margin-normal"
                        placeholder="Ingredient 2"
                        className={classes.ingredient}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      /> 

                      <TextField onChange={handleChangeAmount}
                        value={inputRecipe.amount[1]}
                        id="outlined-margin-normal"
                        placeholder="Quantity"
                        className={classes.amount}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      />
                      <FormControl   className={classes.textField} variant="outlined">
                        <Select
                          className={classes.unit}
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={props.unit}
                          onChange={handleChangeUnitTwo}
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

                    <div className={classes.ingredients}>
                      <TextField onChange={handleChangeIngredients}
                        value={inputRecipe.ingredients[2]}
                        // label="Password"
                        id="outlined-margin-normal"
                        placeholder="Ingredient 3"
                        className={classes.ingredient}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      /> 

                      <TextField onChange={handleChangeAmount}
                        value={inputRecipe.amount[2]}
                        id="outlined-margin-normal"
                        placeholder="Quantity"
                        className={classes.amount}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      />
                      <FormControl   className={classes.textField} variant="outlined">
                        <Select
                        className={classes.unit}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.unit}
                        onChange={handleChangeUnitThree}
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

                    <div className={classes.ingredients}>
                      <TextField onChange={handleChangeIngredients}
                        value={inputRecipe.ingredients[3]}
                        // label="Password"
                        id="outlined-margin-normal"
                        placeholder="Ingredient 4"
                        className={classes.ingredient}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      /> 

                      <TextField onChange={handleChangeAmount}
                        value={inputRecipe.amount[3]}
                        id="outlined-margin-normal"
                        placeholder="Quantity"
                        className={classes.amount}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      />
                      <FormControl   className={classes.textField} variant="outlined">
                        <Select
                          className={classes.unit}
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={props.unit}
                          onChange={handleChangeUnitFour}
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

                    <div className={classes.ingredients}>
                      <TextField onChange={handleChangeIngredients}
                        value={inputRecipe.ingredients[4]}
                        // label="Password"
                        id="outlined-margin-normal"
                        placeholder="Ingredient 5"
                        className={classes.ingredient}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                      }}
                      />

                      <TextField onChange={handleChangeAmount}
                        value={inputRecipe.amount[4]}
                        id="outlined-margin-normal"
                        placeholder="Quantity"
                        className={classes.amount}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      />

                      <FormControl   className={classes.textField} variant="outlined">
                        <Select
                        className={classes.unit}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.unit}
                        onChange={handleChangeUnitFive}
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

                <h1 className={classes.subheading}>Directions:</h1>
                    </div>

                  <div className={classes.directions}>
                    {/* DIRECTIONS */}
                    <TextField onChange={handleChangeDirectionsOne}
                      value={inputRecipe.directions_one}
                      id="outlined-margin-normal"
                      placeholder="Direction 1"
                      className={classes.step}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'orange' },
                      }}
                    />

                    <TextField onChange={handleChangeDirectionsTwo}
                      value={inputRecipe.directions_two}
                      id="outlined-margin-normal"
                      placeholder="Direction 2"
                      className={classes.step}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'orange' },
                      }}
                    /> 

                    <TextField onChange={handleChangeDirectionsThree}
                      value={inputRecipe.directions_three}
                      id="outlined-margin-normal"
                      placeholder="Direction 3"
                      className={classes.step}
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
                      className={classes.step}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'orange' },
                      }}
                    /> 

                    <TextField onChange={handleChangeDirectionsFive}
                      value={inputRecipe.directions_five}
                      id="outlined-margin-normal"
                      placeholder="Direction 5"
                      className={classes.step}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'orange' },
                      }}
                    /> 

                    <TextField onChange={handleChangeDirectionsSix}
                      value={inputRecipe.directions_six}
                      id="outlined-margin-normal"
                      placeholder="Direction 6"
                      className={classes.step}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'orange' },
                      }}
                    /> 
                  </div>
               
                  <br/>
                    <div className={classes.button}>
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
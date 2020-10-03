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
import Checkbox from '@material-ui/core/Checkbox';

import FormControlLabel from '@material-ui/core/FormControlLabel';
// import greek from '../../../express-backend/routes/greek';





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
  },

  time: {
    width: "150px",
 marginLeft: '45px',
 "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
  borderColor: "orange",
    },
  },

  check: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "50px"
  },

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
  const [redirect, setRedirect] = useState(false);
  const [ingredient, setIngredient] = useState({
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
  });
  const [amount, setAmount] = useState({
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
  })
  const [unit, setUnit] = useState({
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
  })

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
    american: false,
    mexican: false,
    italian: false,
    indian: false,
    chinese: false,
    korean: false,
    japanese: false,
    mediterranean: false,
    spanish: false,
    greek: false,
    turkish: false,
    time: null,
  });


  const validate = () => {
    if (!inputRecipe.name) {
      setError("Recipe name is required!");
      return;
    } else if (!inputRecipe.description) {
      setError("Description is required!");
      return;
    } else if (!inputRecipe.time) {
      setError("Time is required!");
      return;
    }
  
    const ingredientOne = ingredient.one[ingredient.one.length-1];
    const ingredientTwo = ingredient.two[ingredient.two.length-1];
    const ingredientThree = ingredient.three[ingredient.three.length-1];
    const ingredientFour = ingredient.four[ingredient.four.length-1];
    const ingredientFive = ingredient.five[ingredient.five.length-1];
    const amountOne = amount.one[amount.one.length-1];
    const amountTwo = amount.two[amount.two.length-1];
    const amountThree = amount.three[amount.three.length-1];
    const amountFour = amount.four[amount.four.length-1];
    const amountFive = amount.five[amount.five.length-1];
    const unitOne = unit.one[unit.one.length-1];
    const unitTwo = unit.two[unit.two.length-1];
    const unitThree = unit.three[unit.three.length-1];
    const unitFour = unit.four[unit.four.length-1];
    const unitFive = unit.five[unit.five.length-1];

    if (ingredientOne) {
      inputRecipe.ingredients.push(ingredientOne);
    };
    if (ingredientTwo) {
      inputRecipe.ingredients.push(ingredientTwo);
    }
    if (ingredientThree) {
      inputRecipe.ingredients.push(ingredientThree);
    }
    if (ingredientFour) {
      inputRecipe.ingredients.push(ingredientFour);
    }
    if (ingredientFive) {
      inputRecipe.ingredients.push(ingredientFive);
    }
    if (amountOne) {
      inputRecipe.amount.push(amountOne);
    };
    if (amountTwo) {
      inputRecipe.amount.push(amountTwo);
    }
    if (amountThree) {
      inputRecipe.amount.push(amountThree);
    }
    if (amountFour) {
      inputRecipe.amounts.push(amountFour);
    }
    if (amountFive) {
      inputRecipe.amount.push(amountFive);
    }
    if (unitOne) {
      inputRecipe.unit.push(unitOne);
    };
    if (unitTwo) {
      inputRecipe.unit.push(unitTwo);
    }
    if (unitThree) {
      inputRecipe.unit.push(unitThree);
    }
    if (unitFour) {
      inputRecipe.unit.push(unitFour);
    }
    if (unitFive) {
      inputRecipe.unit.push(unitFive);
    }
    if (ingredientOne && !amountOne) {
      setError("Amount is required!");
      return;
    }
    if (ingredientTwo && !amountTwo) {
      setError("Amount is required!");
      return;
    }
    if (ingredientThree && !amountThree) {
      setError("Amount is required!");
      return;
    }
    if (ingredientFour && !amountFour) {
      setError("Amount is required!");
      return;
    }
    if (ingredientFive && !amountFive) {
      setError("Amount is required!");
      return;
    }

    const newRecipe = {
      user: inputRecipe.user,
      name: inputRecipe.name,
      img_url: inputRecipe.img_url,
      description: inputRecipe.description,
      directions_one: inputRecipe.directions_one,
      directions_two: inputRecipe.directions_two,
      directions_three: inputRecipe.directions_three,
      directions_four: inputRecipe.directions_four,
      directions_five: inputRecipe.directions_five,
      directions_six: inputRecipe.directions_six,
      ingredients: inputRecipe.ingredients,
      amount: inputRecipe.amount,
      unit: inputRecipe.unit,
      breakfast: inputRecipe.breakfast,
      lunch: inputRecipe.lunch,
      appetizer: inputRecipe.appetizer,
      dinner: inputRecipe.dinner,
      dessert: inputRecipe.dessert,
      glutenFree: inputRecipe.glutenFree,
      nutFree: inputRecipe.nutFree,
      dairyFree: inputRecipe.dairyFree,
      vegetarian: inputRecipe.vegetarian,
      vegan: inputRecipe.vegan,
      isSalty: inputRecipe.isSalty,
      isGreasy: inputRecipe.isGreasy,
      isSpicy: inputRecipe.isSpicy,
      isSweet: inputRecipe.isSweet,
      isFruity: inputRecipe.isFruity,
      isHealthy: inputRecipe.isHealthy,
      isCold: inputRecipe.isCold,
      isHot: inputRecipe.isHot,
      american: inputRecipe.american,
      mexican: inputRecipe.mexican,
      italian: inputRecipe.italian,
      indian: inputRecipe.indian,
      chinese: inputRecipe.chinese,
      korean: inputRecipe.korean,
      japanese: inputRecipe.japanese,
      mediterranean: inputRecipe.mediterranean,
      spanish: inputRecipe.spanish,
      greek: inputRecipe.greek,
      turkish: inputRecipe.turkish,
      time: inputRecipe.time,
    }

      axios.post(`http://localhost:8080/add`, newRecipe)
      .then(res => {
        console.log(res);
        console.log("resfromadd", res.data);
        setRedirect(true)
        if (res.status === 200) {
          // setCookie('name', user.email, {path: '/'});
        }
      })
      .catch(err => {
        // setError("Account already exists!");
      })


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

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
      american: false,
      mexican: false,
      italian: false,
      indian: false,
      chinese: false,
      korean: false,
      japanese: false,
      mediterranean: false,
      spanish: false,
      greek: false,
      turkish: false,
      time: 0,
    })
    setIngredient({
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
    });
    setAmount({
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
    })
    setUnit({
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
    })

  };

  const handleChangeName = (e) => {
    console.log("NAME", e.target.value)
    setInputRecipe({ ...inputRecipe, name: e.target.value });
  }

  const handleChangeDescription = (e) => {
    console.log('Des', e.target.value)
    setInputRecipe({ ...inputRecipe, description: e.target.value });
  }

  const handleChangeImg = (e) => {
    console.log("IMAGE", e.target.value)
    setInputRecipe({ ...inputRecipe, img_url: e.target.value });
  }
  const handleChangeIngredientsOne = (e) => {
    console.log("INGRED", e.target.value)
    ingredient.one.push(e.target.value);
  }

  const handleChangeIngredientsTwo = (e) => {
    ingredient.two.push(e.target.value);
  }

  const handleChangeIngredientsThree = (e) => {
    ingredient.three.push(e.target.value);
  }

  const handleChangeIngredientsFour = (e) => {
    ingredient.four.push(e.target.value);
  }

  const handleChangeIngredientsFive = (e) => {
    ingredient.five.push(e.target.value);
  }

    const handleChangeTime = (e) => {
      setInputRecipe({ ...inputRecipe, time: e.target.value });
    }

  const handleChangeAmountOne = (e) => {
    amount.one.push(e.target.value);
  }

  const handleChangeAmountTwo = (e) => {
    amount.two.push(e.target.value);
  }

  const handleChangeAmountThree = (e) => {
    amount.three.push(e.target.value);
  }

  const handleChangeAmountFour = (e) => {
    amount.four.push(e.target.value);
  }

  const handleChangeAmountFive = (e) => {
    amount.five.push(e.target.value);
  }

  const handleChangeUnitOne = (e) => {
    inputRecipe.unit.push({0: e.target.value});
  }

  const handleChangeUnitTwo = (e) => {
    console.log('unit 2 ', e.target.value)
    inputRecipe.unit.push({1: e.target.value});
  }

  const handleChangeUnitThree = (e) => {
    inputRecipe.unit.push({2: e.target.value});
  }

  const handleChangeUnitFour = (e) => {
    inputRecipe.unit.push({3: e.target.value});
  }

  const handleChangeUnitFive = (e) => {
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

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.checked);
    // setState({ ...state, [event.target.name]: event.target.checked });
    setInputRecipe({ ...inputRecipe, [event.target.name]: event.target.checked });
  };

  console.log(inputRecipe)
  
  if (!redirect){
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
                  <h1 className={classes.subheading}>Time:</h1>
                  <TextField onChange={handleChangeTime}
                    value={inputRecipe.time}
                    id="outlined-margin-normal"
                    placeholder="Minutes"
                    className={classes.time}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: 'orange' },
                    }}
                  />
                </div>
                <div  className={classes.cont}>
                <h1 className={classes.subheading}>Meal Type: </h1>
                <div className={classes.check}>
                <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.breakfast}
                        onClick={handleChange}
                        name="breakfast"
                        color="primary"
                      />
                    }
                    label="Breakfast"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.lunch}
                        onClick={handleChange}
                        name="lunch"
                        color="primary"
                      />
                    }
                    label="Lunch"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.appetizer}
                        onClick={handleChange}
                        name="appetizer"
                        color="primary"
                      />
                    }
                    label="Appetizer"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.dinner}
                        onClick={handleChange}
                        name="dinner"
                        color="primary"
                      />
                    }
                    label="Dinner"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.dessert}
                        onClick={handleChange}
                        name="dessert"
                        color="primary"
                      />
                    }
                    label="Dessert"
                  />
                  </div>
                <h1 className={classes.subheading}>Dietary Restrictations: </h1>
                <div className={classes.check}>

                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.glutenFree}
                        onClick={handleChange}
                        name="glutenFree"
                        color="primary"
                      />
                    }
                    label="Gluten Free"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.dairyFree}
                        onClick={handleChange}
                        name="dairyFree"
                        color="primary"
                      />
                    }
                    label="Dairy Free"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.nutFree}
                        onClick={handleChange}
                        name="nutFree"
                        color="primary"
                      />
                    }
                    label="Nut Free"
                  />
                     <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.vegan}
                        onClick={handleChange}
                        name="vegan"
                        color="primary"
                      />
                    }
                    label="Vegan"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.vegetarian}
                        onClick={handleChange}
                        name="vegetarian"
                        color="primary"
                      />
                    }
                    label="Vegetarian"
                  />
                  </div>
                </div>
                <div  className={classes.cont}>
                <h1 className={classes.subheading}>Attributes: </h1>
                <div className={classes.check}>
                <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.isSalty}
                        onClick={handleChange}
                        name="isSalty"
                        color="primary"
                      />
                    }
                    label="Salty"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.isGreasy}
                        onClick={handleChange}
                        name="isGreasy"
                        color="primary"
                      />
                    }
                    label="Greasy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.isSpicy}
                        onClick={handleChange}
                        name="isSpicy"
                        color="primary"
                      />
                    }
                    label="Spicy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.isSweet}
                        onClick={handleChange}
                        name="isSweet"
                        color="primary"
                      />
                    }
                    label="Sweet"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.isFruity}
                        onClick={handleChange}
                        name="isFruity"
                        color="primary"
                      />
                    }
                    label="Fruity"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.isHealthy}
                        onClick={handleChange}
                        name="isHealthy"
                        color="primary"
                      />
                    }
                    label="Healthy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.isHot}
                        onClick={handleChange}
                        name="isHot"
                        color="primary"
                      />
                    }
                    label="Hot"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.isCold}
                        onClick={handleChange}
                        name="isCold"
                        color="primary"
                      />
                    }
                    label="Cold"
                  />
                  </div>
                  <h1 className={classes.subheading}>Cultures: </h1>
                <div className={classes.check}>
                <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.american}
                        onClick={handleChange}
                        name="american"
                        color="primary"
                      />
                    }
                    label="American"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.mexican}
                        onClick={handleChange}
                        name="mexican"
                        color="primary"
                      />
                    }
                    label="Mexican"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.italian}
                        onClick={handleChange}
                        name="italian"
                        color="primary"
                      />
                    }
                    label="Italian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.indian}
                        onClick={handleChange}
                        name="indian"
                        color="primary"
                      />
                    }
                    label="Indian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.chinese}
                        onChange={handleChange}
                        name="chinese"
                        color="primary"
                      />
                    }
                    label="Chinese"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.korean}
                        onClick={handleChange}
                        name="korean"
                        color="primary"
                      />
                    }
                    label="Korean"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.japanese}
                        onClick={handleChange}
                        name="japanese"
                        color="primary"
                      />
                    }
                    label="Japanese"
                  />
                  </div>
                  <div className={classes.check}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.mediterranean}
                        onClick={handleChange}
                        name="mediterranean"
                        color="primary"
                      />
                    }
                    label="Mediterranean"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.spanish}
                        onClick={handleChange}
                        name="spanish"
                        color="primary"
                      />
                    }
                    label="Spanish"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.greek}
                        onClick={handleChange}
                        name="greek"
                        color="primary"
                      />
                    }
                    label="Greek"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={inputRecipe.turkish}
                        onClick={handleChange}
                        name="turkish"
                        color="primary"
                      />
                    }
                    label="Turkish"
                  />
                  </div>
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
                      <TextField onChange={handleChangeIngredientsOne}
                        value={ingredient.one}
                        id="outlined-margin-normal"
                        placeholder="Ingredient 1"
                        className={classes.ingredient}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'orange' },
                        }}
                      />
                         <TextField onChange={handleChangeAmountOne}
                        value={amount.one}
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
                      <TextField onChange={handleChangeIngredientsTwo}
                        value={ingredient.two}
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

                      <TextField onChange={handleChangeAmountTwo}
                        value={amount.two}
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
                      <TextField onChange={handleChangeIngredientsThree}
                        value={ingredient.three}
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

                      <TextField onChange={handleChangeAmountThree}
                        value={amount.three}
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
                      <TextField onChange={handleChangeIngredientsFour}
                        value={ingredient.four}
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

                      <TextField onChange={handleChangeAmountFour}
                        value={amount.four}
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
                      <TextField onChange={handleChangeIngredientsFive}
                        value={ingredient.five}
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

                      <TextField onChange={handleChangeAmountFive}
                        value={amount.five}
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
  } else {
    return <Redirect to = {{ pathname: "/myrecipes" }} />;
  }
}

export default AddRecipe;
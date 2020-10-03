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
  // const [checked, setChecked] = useState(false);
  const [ingredient, setIngredient] = useState({
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
  });
  
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
    time: null,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientOne = ingredient.one[ingredient.one.length-1];
    const ingredientTwo = ingredient.two[ingredient.two.length-1];
    const ingredientThree = ingredient.three[ingredient.three.length-1];
    const ingredientFour = ingredient.four[ingredient.four.length-1];
    const ingredientFive = ingredient.five[ingredient.five.length-1];
    inputRecipe.ingredients.push(ingredientOne);
    inputRecipe.ingredients.push(ingredientTwo);
    inputRecipe.ingredients.push(ingredientThree);
    inputRecipe.ingredients.push(ingredientFour);
    inputRecipe.ingredients.push(ingredientFive);
    
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
      time: inputRecipe.time,
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
      time: null,
    })
  };


  const handleChangeUnit = (event) => {
    console.log("UNIT", event.target.value)
    setInputRecipe({ ...inputRecipe, [event.target.name]: event.target.value });
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
    // setInputRecipe({ ...inputRecipe, ingredients_two: e.target.value });
    ingredient.two.push(e.target.value);
  }

  const handleChangeIngredientsThree = (e) => {
    // setInputRecipe({ ...inputRecipe, ingredients_three: e.target.value });
    ingredient.three.push(e.target.value);
  }
  
  const handleChangeIngredientsFour = (e) => {
    // setInputRecipe({ ...inputRecipe, ingredients_four: e.target.value });
    ingredient.four.push(e.target.value);
  }

  const handleChangeIngredientsFive = (e) => {
    // setInputRecipe({ ...inputRecipe, ingredients_five: e.target.value });
    ingredient.five.push(e.target.value);
  }

  const handleChangeAmount = (e) => {
    console.log("AMOUT", e.target.value)
    // setInputRecipe({ ...inputRecipe, amount_one: e.target.value });
    inputRecipe.amount.push(e.target.value)
  }

  const handleChangeTime = (e) => {
    console.log("Time", e.target.value)
    setInputRecipe({ ...inputRecipe, time: e.target.value });
    // inputRecipe.amount.push(e.target.value)
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
    console.log("UNIT 1", e.target.value)
    // setInputRecipe({ ...inputRecipe, unit_one: e.target.value });
    inputRecipe.unit.push({0: e.target.value});
  }

  const handleChangeUnitTwo = (e) => {
    // setInputRecipe({ ...inputRecipe, unit_two: e.target.value });
    console.log('unit 2 ', e.target.value)
    inputRecipe.unit.push({1: e.target.value});
  }

  const handleChangeUnitThree = (e) => {
    // setInputRecipe({ ...inputRecipe, unit_three: e.target.value });
    console.log('unit 3 ', e.target.value)
    inputRecipe.unit.push({2: e.target.value});
  }
  
  const handleChangeUnitFour = (e) => {
    console.log("UNIT 4", e.target.value)
    // setInputRecipe({ ...inputRecipe, unit_four: e.target.value });
    inputRecipe.unit.push({3: e.target.value});
  }

  const handleChangeUnitFive = (e) => {
    // setInputRecipe({ ...inputRecipe, unit_five: e.target.value });
    console.log('unit 5 ', e.target.value)
    inputRecipe.unit.push({4: e.target.value});
  }

  const handleChangeDirectionsOne = (e) => {
    console.log("DIR 1", e.target.value)
    setInputRecipe({ ...inputRecipe, directions_one: e.target.value });
  }

  const handleChangeDirectionsTwo = (e) => {
    console.log('direc 2 ', e.target.value)
    setInputRecipe({ ...inputRecipe, directions_two: e.target.value });
  }

  const handleChangeDirectionsThree = (e) => {
    console.log('direc 3 ', e.target.value)
    setInputRecipe({ ...inputRecipe, directions_three: e.target.value });
  }
  
  const handleChangeDirectionsFour = (e) => {
    console.log('direc 4 ', e.target.value)
    setInputRecipe({ ...inputRecipe, directions_four: e.target.value });
  }

  const handleChangeDirectionsFive = (e) => {
    console.log('direc 5 ', e.target.value)
    setInputRecipe({ ...inputRecipe, directions_five: e.target.value });
  }
  
  const handleChangeDirectionsSix = (e) => {
    console.log("DIR 6", e.target.value)
    setInputRecipe({ ...inputRecipe, directions_six: e.target.value });
  }

  // const handleChangeGlutenFree = (e) => {
  //   console.log("glutenFree", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeDairyFree = (e) => {
  //   console.log("dairyFree", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeVegan = (e) => {
  //   console.log("vegan", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeVegetarian = (e) => {
  //   console.log("vegetarian", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeNutFree = (e) => {
  //   console.log("nutFree", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeIsSalty = (e) => {
  //   console.log("is_salty", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };
  
  // const handleChangeIsGreasy = (e) => {
  //   console.log("is_greasy", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeIsSpicy = (e) => {
  //   console.log("is_spicy", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeIsSweet = (e) => {
  //   console.log("is_sweet", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeIsFruity = (e) => {
  //   console.log("is_fruity", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeHealthy = (e) => {
  //   console.log("is_healthy", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeIsCold = (e) => {
  //   console.log("is_cold", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  // const handleChangeIsHot = (e) => {
  //   console.log("is_hot", e.target.value)
  //   setInputRecipe({ ...inputRecipe, directions_six: e.target })
  //   //checked
  // };

  const handleChange = (event) => {
    console.log(event.target);
    setState({ ...state, [event.target.name]: event.target.checked });
    setInputRecipe({ ...inputRecipe, [event.target.name]: event.target.checked });
  };
  
  const [state, setState] = React.useState({
    gluten_free : false,
    nut_free : false,
    dairy_free : false,
    vegetarian : false,
    vegan : false,
    is_salty: false,
    is_greasy: false,
    is_spicy: false,
    is_sweet: false,
    is_fruity:false,
    is_healthy: false,
    is_hot: false,
    is_cold: false,
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
    turkish: false
  });


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
                <h1 className={classes.subheading}>Dietary Restrictations: </h1>
                <div className={classes.check}>
                
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.gluten_free}
                        onChange={handleChange}
                        name="gluten_free"
                        color="primary"
                      />
                    }
                    label="GlutenFree"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.dairy_free}
                        onChange={handleChange}
                        name="dairy_free"
                        color="primary"
                      />
                    }
                    label="DairyFree"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.nut_free}
                        onChange={handleChange}
                        name="nut_free"
                        color="primary"
                      />
                    }
                    label="NutFree"
                  />
                     <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.vegan}
                        onChange={handleChange}
                        name="vegan"
                        color="primary"
                      />
                    }
                    label="Vegan"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.vegetarian}
                        onChange={handleChange}
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
                        checked={state.is_salty}
                        onChange={handleChange}
                        name="is_salty"
                        color="primary"
                      />
                    }
                    label="Salty"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.is_greasy}
                        onChange={handleChange}
                        name="is_greasy"
                        color="primary"
                      />
                    }
                    label="Greasy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.is_spicy}
                        onChange={handleChange}
                        name="is_spicy"
                        color="primary"
                      />
                    }
                    label="Spicy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.is_sweet}
                        onChange={handleChange}
                        name="is_sweet"
                        color="primary"
                      />
                    }
                    label="Sweet"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.is_fruity}
                        onChange={handleChange}
                        name="is_fruity"
                        color="primary"
                      />
                    }
                    label="Fruity"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.is_healthy}
                        onChange={handleChange}
                        name="is_healthy"
                        color="primary"
                      />
                    }
                    label="Healthy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.is_hot}
                        onChange={handleChange}
                        name="is_hot"
                        color="primary"
                      />
                    }
                    label="Hot"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.is_cold}
                        onChange={handleChange}
                        name="is_cold"
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
                        checked={state.american}
                        onChange={handleChange}
                        name="American"
                        color="primary"
                      />
                    }
                    label="American"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.mexican}
                        onChange={handleChange}
                        name="Mexican"
                        color="primary"
                      />
                    }
                    label="Mexican"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.italian}
                        onChange={handleChange}
                        name="Italian"
                        color="primary"
                      />
                    }
                    label="Italian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.indian}
                        onChange={handleChange}
                        name="Indian"
                        color="primary"
                      />
                    }
                    label="Indian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.chinese}
                        onChange={handleChange}
                        name="Chinese"
                        color="primary"
                      />
                    }
                    label="Chinese"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.korean}
                        onChange={handleChange}
                        name="Korean"
                        color="primary"
                      />
                    }
                    label="Korean"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.japanese}
                        onChange={handleChange}
                        name="Japanese"
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
                        checked={state.mediterranean}
                        onChange={handleChange}
                        name="Mediterranean"
                        color="primary"
                      />
                    }
                    label="Mediterranean"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.spanish}
                        onChange={handleChange}
                        name="Spanish"
                        color="primary"
                      />
                    }
                    label="Spanish"
                  />
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.greek}
                        onChange={handleChange}
                        name="Greek"
                        color="primary"
                      />
                    }
                    label="Greek"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.turkish}
                        onChange={handleChange}
                        name="Turkish"
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
                      <TextField onChange={handleChangeIngredientsTwo}
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
                      <TextField onChange={handleChangeIngredientsThree}
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
                      <TextField onChange={handleChangeIngredientsFour}
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
                      <TextField onChange={handleChangeIngredientsFive}
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
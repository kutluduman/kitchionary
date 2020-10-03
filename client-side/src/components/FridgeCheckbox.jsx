import React, {useState} from 'react';
import { withStyles, makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from "@material-ui/core/Button";




// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);




const useStyles = makeStyles((theme) =>
  createStyles({
   toggle: {
    //  display:'flex',
    //  flexDirection:'row',
    //  justifyContent: 'space-around',
     margin:'10px',
    width: '250px',
    height: '75px',
    fontSize: '20px',
    marginBottom: '15px',
    marginTop: '25px',
    color: 'black',
    backgroundColor: '#f3f3f3',
    "&:hover": {
      backgroundColor: 'orange',
    },
    "&.Mui-selected": {
      backgroundColor: "orange",
      color: "black",
      "&:hover": {
        backgroundColor: '#ffcc80',
      }
   }
  }
    
  })
);


const FridgeCheckbox = (props) => {

  const classes = useStyles();

  const handleChangeGlutenFree = (event) => {
    if (event) {
      props.setInput({ ...props.inputState, glutenFree: false });
    } else {
      props.setInput({ ...props.inputState, glutenFree: true });
    }
  };

  
  const handleChangeNutFree = (event) => {
    if (event) {
      props.setInput({ ...props.inputState, nutFree: false });
    } else {
      props.setInput({ ...props.inputState, nutFree: true });
    }
  };
  
  const handleChangeDairyFree = (event) => {
    if (event) {
      props.setInput({ ...props.inputState, dairyFree: false });
    } else {
      props.setInput({ ...props.inputState, dairyFree: true });
    }
  };
  const handleChangeVegetarian = (event) => {
    if (event) {
      props.setInput({ ...props.inputState, vegetarian: false });
    } else {
      props.setInput({ ...props.inputState, vegetarian: true });
    }
  };

  const handleChangeVegan = (event) => {
    if (event) {
      props.setInput({ ...props.inputState, vegan: false });
    } else {
      props.setInput({ ...props.inputState, vegan: true });
    }
  };
  console.log("STATE", props.inputState)

  return(
    <div>
    <ToggleButton
    
    className = {classes.toggle}
    onClick={() => handleChangeGlutenFree(props.dietaryRestrictions.glutenFree)}
    value="check"
    selected={props.dietaryRestrictions.glutenFree}
    onChange={() => {
      if (!props.dietaryRestrictions.glutenFree) {
      props.setDietaryRestrictions({...props.dietaryRestrictions, glutenFree: true});
      } else if (props.dietaryRestrictions.glutenFree) {
        props.setDietaryRestrictions({...props.dietaryRestrictions, glutenFree: false});
      }
    }}
  >
    gluten-free
  </ToggleButton>
  <ToggleButton
  className = {classes.toggle}
  onClick={() => handleChangeNutFree(props.dietaryRestrictions.nutFree)}
    value="check"
    selected={props.dietaryRestrictions.nutFree}
    onChange={() => {
      if (!props.dietaryRestrictions.nutFree) {
        props.setDietaryRestrictions({...props.dietaryRestrictions, nutFree: true});
      } else if (props.dietaryRestrictions.nutFree) {
          props.setDietaryRestrictions({...props.dietaryRestrictions, nutFree: false});
      }
    }}
  >
    nut-free
  </ToggleButton>
  <ToggleButton
  className = {classes.toggle}
  onClick={() => handleChangeDairyFree(props.dietaryRestrictions.dairyFree)}
    value="check"
    selected={props.dietaryRestrictions.dairyFree}
    onChange={() => {
      if (!props.dietaryRestrictions.dairyFree) {
        props.setDietaryRestrictions({...props.dietaryRestrictions, dairyFree: true});
      } else if (props.dietaryRestrictions.dairyFree) {
          props.setDietaryRestrictions({...props.dietaryRestrictions, dairyFree: false});
      }
    }}
  >
    dairy-free
  </ToggleButton>
  <ToggleButton
  className = {classes.toggle}
  onClick={() => handleChangeVegetarian(props.dietaryRestrictions.vegetarian)}
    value="check"
    selected={props.dietaryRestrictions.vegetarian}
    onChange={() => {
      if (!props.dietaryRestrictions.vegetarian) {
        props.setDietaryRestrictions({...props.dietaryRestrictions, vegetarian: true});
      } else if (props.dietaryRestrictions.vegetarian) {
          props.setDietaryRestrictions({...props.dietaryRestrictions, vegetarian: false});
      }
    }}
  >
    vegetarian
  </ToggleButton>
  <ToggleButton
  className = {classes.toggle}
 onClick={() => handleChangeVegan(props.dietaryRestrictions.vegan)}
    value="check"
    selected={props.dietaryRestrictions.vegan}
    onChange={() => {
      if (!props.dietaryRestrictions.vegan) {
        props.setDietaryRestrictions({...props.dietaryRestrictions, vegan: true});
      } else if (props.dietaryRestrictions.vegan) {
          props.setDietaryRestrictions({...props.dietaryRestrictions, vegan: false});
      }
    }}
  >
    vegan
  </ToggleButton>
  </div>
  )






//   return (
//     <FormGroup row>


//       <FormControlLabel
//         control={
//           <Checkbox
//             // checked={state.glutenFree}
//             onChange={handleChange}
//             name="glutenFree"
//             color="primary"
            
//           />
//         }
//         label="Gluten Free"
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             // checked={state.nutFree}
//             onChange={handleChange}
//             name="nutFree"
//             color="primary"
//           />
//         }
//         label="Nut Free"
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             // checked={state.dairyFree}
//             onChange={handleChange}
//             name="dairyFree"
//             color="primary"
//           />
//         }
//         label="Dairy Free"
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             // checked={state.vegetarian}
//             onChange={handleChange}
//             name="vegetarian"
//             color="primary"
//           />
//         }
//         label="Vegetarian"
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             // checked={state.vegan}
//             onChange={handleChange}
//             name="vegan"
//             color="primary"
//           />
//         }
//         label="Vegan"
//       />
//     </FormGroup>
      
//   )

 }

export default FridgeCheckbox;

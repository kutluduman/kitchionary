import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import breakfast from "../../docs/breakfast3.jpg";
import lunch from "../../docs/lunch2.jpg";
import appetizer from "../../docs/appetizer2.jpg";
import dinner from "../../docs/dinner2.jpg";
import dessert from "../../docs/dessert2.jpg";
import "../../styles/fridgeMealCheck.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
    }
  }
}));

const FridgeAvatar = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setInput({ ...props.inputState, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <ul>
        <li><input onClick={handleChange} name='breakfast' type="checkbox" id="cb1" />
          <label className="labelMeal" for="cb1"><img src={breakfast} />
          </label>
        </li>
        <li><input onClick={handleChange} name='lunch' type="checkbox" id="cb2" />
          <label className="labelMeal" for="cb2"><img src={lunch} /></label>
        </li>
        <li><input onClick={handleChange} name='appetizer' type="checkbox" id="cb3" />
          <label className="labelMeal" for="cb3"><img src={appetizer} /></label>
        </li>
        <li><input onClick={handleChange} name='dinner' type="checkbox" id="cb4" />
          <label className="labelMeal" for="cb4"><img src={dinner} /></label>
        </li>
        <li><input onClick={handleChange} name='dessert' type="checkbox" id="cb5" />
          <label className="labelMeal" for="cb5"><img src={dessert} /></label>
        </li>
      </ul>
    </div>
  )
}

export default FridgeAvatar;
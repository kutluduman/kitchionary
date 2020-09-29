import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import breakfast from "../docs/breakfast.jpg";
import lunch from "../docs/lunch.jpg";
import appetizer from "../docs/appetizer.jpg";
import dinner from "../docs/dinner.jpg";
import dessert from "../docs/dessert.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));


const FridgeAvatar = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Avatar alt="Breakfast" src={breakfast} className={classes.large} />
      <Avatar alt="Lunch" src={lunch} className={classes.large} />
      <Avatar alt="Appetizer" src={appetizer} className={classes.large} />
      <Avatar alt="Dinner" src={dinner} className={classes.large} />
      <Avatar alt="Dessert" src={dessert} className={classes.large} />
    </div>
  )
}

export default FridgeAvatar;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "react-simple-flex-grid/lib/main.css";
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  media: {
    width: 700,
    height: 700,
    marginLeft: 45,
      },
  cont: {
   marginTop: 30,
  },
  ingredient: {
   fontFamily: "Roboto",
   fontSize: "17px"
  }
}));

function IngredientDetail(props) {
  const classes = useStyles();
  const ingredient = capitalize(props.ingredient);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  let amount = `${props.amount}`
  if (props.unit) {
    amount += ` ${props.unit}`
  };

    return (
      <div className={classes.ingredient}>
        <ListItemText className={classes.ingredient}/>
        {amount} {ingredient} 
      </div>   
    );
  }

export default IngredientDetail;



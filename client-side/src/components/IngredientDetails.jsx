import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import sample from '../docs/sample.jpg';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  
  media: {
        width: 700,
        height: 700,
        marginTop: 30,
        marginLeft: 45,
        
      },
  cont: {
   marginTop: 30,
   
  },

  title:{
    marginTop: 110,
  }

}));

function IngredientDetail(props) {
  const classes = useStyles();
  // const [value, setValue] = React.useState(4);
  // const info = props.recipeData;


  // console.log("PROPS recipeData", props.recipeData);
  // console.log("INFO", info[0])


//  info.map(data => {
//     ingredient = data.ingredient;
//     amount = data.amount;
//     unit = data.unit
//   })

  let amount = `${props.amount}`
  if (props.unit) {
    amount += ` ${props.unit}`
  }


  return (
   <div>
              <ListItemText primary={props.ingredient} secondary={amount}/>
              <Divider variant="inset" component="li" />
      </div>
        
  );
  }


export default IngredientDetail;



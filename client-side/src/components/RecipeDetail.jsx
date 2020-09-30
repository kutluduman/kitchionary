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
import IngredientDetails from './IngredientDetails';

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

function RecipeDetail(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);
  const info = props.recipeData;


  console.log("PROPS recipeData", props.recipeData);
  console.log("INFO", info[0])


//  info.map(data => {
//     ingredient = data.ingredient;
//     amount = data.amount;
//     unit = data.unit
//   })


  return (
    <Row>
      <Col span={5}>
        <CardMedia
        // INSERT RECIPE IMAGE
          className={classes.media}
          image={info[0].img_url}
          title={info[0].name}
        />
      </Col>
      <Col span={6}>

        <Col  className={classes.cont} span={3}>
        <Box className="rating" component="fieldset" mb={3} borderColor="transparent">
          {/* INSERT RECIPE OWNER */}
         <h3><FaceIcon fontSize="medium" color="primary"/> {info[0].first_name} {info[0].last_name}</h3> 
          {/* INSERT RECIPE TIME */}
            <h3><AccessTimeIcon fontSize="medium" color="secondary"/> {info[0].time} min</h3> 
            <Rating name="read-only" value={value} readOnly></Rating>
        </Box>
        <Typography variant="h5" color="textSecondary">
          {/* INSERT RECIPE INGREDIENTS */}
          <h3>Ingredients</h3>
          {props.recipeData.map(ingredient => {
          return (
            <IngredientDetails 
            ingredient={ingredient.ingredient}
            amount={ingredient.amount}
            unit={ingredient.unit}
            />
          );
          })
          }

        </Typography>
        </Col>
        <Col span={9}>
          
        <Typography className={classes.title} variant="h3" component="h2" align="center">
            {/* INSERT RECIPE NAME */}
          {info[0].name}
        </Typography>
        <br/>
        <Typography >
            {/* INSERT RECIPE DESCRIPTION */}
            {info[0].description}
        </Typography>
            <Typography variant="h5" color="textSecondary">
          {/* INSERT DIRECTIONS */}
          <p>
            {info[0].directions}
          </p>         
        </Typography>
        </Col>
      </Col>
    </Row>
  );
}


export default RecipeDetail;



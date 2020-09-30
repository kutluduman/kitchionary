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
          <p>
          1: Preheat oven to 350°F. Line bottom of 8 cake pan with parchment paper. Cut a 21x5 strip of parchment, butter or oil parchment, and line sides of pan. Center the pan on a large piece of foil and fold foil up over the sides to prevent water from entering pan. \n2: Place white chocolate in a medium heatproof bowl and heat in microwave in 20-second intervals (or set bowl over a saucepan of barely simmering water), stirring occasionally, until melted. Transfer to a large bowl and stir in cream cheese. Let cool slightly, then add yolks and stir to combine. \n3: Using an electric mixer on high speed, whip egg whites in another large bowl until stiff peaks form. Add a small portion of egg whites to chocolate mixture and stir just until lightened. Gently fold in remaining egg whites in 2 additions until just combined. \n4: Pour batter into prepared pan. Place pan in a baking dish or roasting pan and add warm water to reach halfway up sides of cake pan. Bake cheesecake until set, 40–45 minutes. Turn oven off and leave pan in oven 15 minutes, then transfer to a wire rack and let cool completely. Remove cheesecake from pan, transfer to a platter, and chill until cold, at least 4 hours or up to overnight.
          </p>

        </Typography>
        </Col>
      </Col>
    </Row>
  );
}


export default RecipeDetail;



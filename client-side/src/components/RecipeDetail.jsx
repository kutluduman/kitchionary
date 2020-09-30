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
    flexGrow: 1 
  },
  
  media: {
        width: 700,
        height: 700,
        marginTop: 30,
        marginLeft: 15,
        
      },
  cont: {
   marginTop: 30,
  },

  title:{
    marginTop: 110,
  }

}));

function RecipeDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);

  return (
    <Row>
      <Col span={5}>
        <CardMedia
          className={classes.media}
          image={sample}
          title="Paella dish"
        />
      </Col>
      <Col span={5}>

        <Col  className={classes.cont} span={3}>
        <Box className="rating" component="fieldset" mb={3} borderColor="transparent">
            <h3><FaceIcon fontSize="medium" color="primary"/> James Smith</h3> 
            <h3><AccessTimeIcon fontSize="medium" color="secondary"/> 40 min</h3> 
            <Rating name="read-only" value={value} readOnly></Rating>
        </Box>
        <Typography variant="h5" color="textSecondary">

          <h3>Ingredients</h3>
              <ListItemText primary="Olive Oil" secondary="2 tablespoons"/>
              <Divider variant="inset" component="li" />
              <ListItemText primary="Bomba rice or Arborio" secondary="2 1.5 cups"/>
              <Divider variant="inset" component="li" />
              <ListItemText primary="Chicken Stock" secondary="3 cups"/>
              <Divider variant="inset" component="li" />
              <ListItemText primary="Chicken Stock" secondary="3 cups"/>
        </Typography>
        </Col>
        <Col span={9}>
          
        <Typography className={classes.title} variant="h3" component="h2" align="center">
          Shrimp and Chorizo Paella
        </Typography>
        <br/>
        <Typography >
        Spanish Rice Dish Paella Recipe ‐ This simple Shrimp and Chorizo Paella is easy to make, has classic paella ingredients with all Spanish flavors. Feed and impress a crowd with this paella recipe!
        </Typography>
            <Typography variant="h5" color="textSecondary">
          {/* INSERT DIRECTIONS */}
          <p>
            Heat olive oil over medium-low heat in a saucepan; stir anchovy fillets into olive oil and cook, stirring often, until the fillets begin to sizzle, about 1 minute. Mix garlic into oil and cook just until fragrant, 1 minute more. Add fresh oregano and reduce heat to low; cook until oregano is wilted, 2 or 3 more minutes.

            Mix red pepper flakes, dried oregano, and tomatoes into olive oil mixture. Bring sauce to a simmer and season with salt, sugar, and black pepper. Turn heat to low; simmer sauce until thickened and oil rises to the top, 35 to 40 minutes, stirring occasionally.
          </p>         
        </Typography>
        </Col>

      </Col>
    </Row>
  );
}


export default RecipeDetail;



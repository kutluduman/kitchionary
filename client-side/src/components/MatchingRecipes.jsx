import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sample from '../docs/sample.jpg';
import RecipeCard from './RecipeCard';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height:400,
    weight:400,
  }
});



const MatchingRecipes = (props) => {
  const classes = useStyles();

  console.log("from matchingrecipes", props.matchingRecipes);

  

 

  return (
    <div>
      <Grid container direction="row" justify="center">
        {props.matchingRecipes.map(recipe => {
          return (
            <RecipeCard 
            name={recipe.name}
            description={recipe.description}
            image={recipe.img_url}
            />
          );
          })
          }


    </Grid>
    </div>

  )

}

export default MatchingRecipes;
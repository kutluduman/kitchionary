import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard';

const MatchingRecipes = (props) => {

  return (
    <div>
      <Grid container direction="row" justify="center">
        {props.matchingRecipes.map(recipe => {
          return (
            <RecipeCard 
            id={recipe.id}
            name={recipe.name}
            description={recipe.description}
            image={recipe.img_url}
            setRecipeData={props.setRecipeData}
            cookies={props.cookies}
            />
          );
          })
          }
    </Grid>
    </div>
  )
}

export default MatchingRecipes;
            
            
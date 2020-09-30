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
import axios from "axios";



const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    height: 700, 
    margin: 25,
    marginTop: 40,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
  },
  media: {
    height: 450,
    weight: 250,

  },

});

const RecipeCard = (props) => {

  const classes = useStyles();

  const handleClick = () => {
    console.log('props', props.name)
    const recipe = props.name;
    const recipe_id = props.id;

    axios.post(`http://localhost:8080/recipes/${recipe_id}`, { recipe })
      .then(res => {
        
      })
      .catch(err => {
        // setError("Incorrect Email or Password!");
      })
  };
    
  return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}
            component="img"
            alt="Shrimp and Chorizo Paella"
            height="140"
            image={props.image}
            title="Shrimp and Chorizo Paella"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button onClick= {handleClick} size="large" color="primary">
            Cook This!
        </Button>
        </CardActions>
      </Card>
      )
}

export default RecipeCard;
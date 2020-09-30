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


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height:400,
    weight:400,
  }
});

const RecipeCard = (props) => {

  const classes = useStyles();


    
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
          <Button size="large" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      )
}

export default RecipeCard;
import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

const Favorite = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [matchingRec, setMatchingRec] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8080/favorite", props.cookies)
    .then(res => {
      console.log("resssfromfav", res.data)
      setMatchingRec(res.data.favourites)
    })
    .catch(err => {
      // setError("Incorrect Email or Password!");
    });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return(
    <div>
            <Grid container direction="row" justify="center">
                {matchingRec.map(recipe => {
                  return (
                    <RecipeCard 
                    // id={recipe.id}
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
     {/* <Card className={classes.root}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton  onClick={handleLike} aria-label="add to favorites" color={like}>
          <FavoriteIcon  />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card> */}
    </div>
  )

}


export default Favorite;
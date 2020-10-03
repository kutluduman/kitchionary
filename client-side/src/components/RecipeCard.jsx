import React, {useState,useEffect} from 'react';
import { Redirect } from "react-router-dom";
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
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';



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
  const [redirect, setRedirect] = useState(false);
  const [like, setLike] = useState('default');
  const [red, setRed] = useState(true);

  const [matchingRec, setMatchingRec] = useState([]);

  useEffect(() => {
    const recipe_id = props.id;
    console.log(recipe_id, "hello")
    const favourite = {
      user_id: props.cookies,
      recipe_id: props.id,
      // is_favourite: red,
    }
    axios.post(`http://localhost:8080/favorite/${recipe_id}`, { favourite })
    .then(res => {
      console.log("resssfromfav", res.data.favourited)
      if (res.data.favourited.length === 0 || (res.data.favourited.length === 1 && res.data.favourited.is_favourite === false)) {
        setLike('default')
        setRed(true)
      } else {
        setLike('secondary')
        setRed(false)
      }
      // setMatchingRec(res.data.favourited)
    })
    .catch(err => {
      // setError("Incorrect Email or Password!");
    });
  }, []);

  const handleLink = (e) => {
    e.preventDefault();
    console.log('props', props.name)
    const recipe = props.name;
    const recipe_id = props.id;
    console.log('RECIPEID2', recipe_id);

    axios.post(`http://localhost:8080/recipes/${recipe_id}`, { recipe })
      .then(res => {
        console.log("resss", res.data.info)
        props.setRecipeData(res.data.info)
        if (res.status === 200) {
          console.log('redirect?fromabove', redirect)
          setRedirect(true)
          console.log('redirect?frombelow', redirect)
        }
      })
      .catch(err => {
        // setError("Incorrect Email or Password!");
      })
  };

  const handleLike = () => {
    // if grey
    const recipe_id = props.id;
    const favourite = {
      user_id: props.cookies,
      recipe_id: props.id,
      is_favourite: red,
    }

    if(like === 'default') {
      setLike('secondary');
      setRed(false)


      axios.post(`http://localhost:8080/favorite/${recipe_id}/favourites`, { favourite })
      .then(res => {
        console.log("resssfromrebder", res.data.favourited)
        // if ()
        // props.setRecipeData(res.data.info)
        // if (res.status === 200) {
        //   console.log('redirect?fromabove', redirect)
        //   setRedirect(true)
        //   console.log('redirect?frombelow', redirect)
        // }
      })
      .catch(err => {
        // setError("Incorrect Email or Password!");
      })
    } else {
      // if red
      setLike('default');
      setRed(true);
      axios.post(`http://localhost:8080/favorite/${recipe_id}/favourites`, { favourite })
      .then(res => {
        console.log("resssfromrecipecardunlike", res.data.favourited)
        // props.setRecipeData(res.data.info)
        // if (res.status === 200) {
        //   console.log('redirect?fromabove', redirect)
        //   setRedirect(true)
        //   console.log('redirect?frombelow', redirect)
        // }
      })
      .catch(err => {
        // setError("Incorrect Email or Password!");
      })
    }
    
  }

  console.log('whta color', red)
  if (!redirect) {
  return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}
            component="img"
            // alt="Shrimp and Chorizo Paella"
            height="140"
            image={props.image}
            title={props.name}
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
        <Button onClick= {handleLink} size="large" color="primary">
            Cook This!
        </Button>
        <IconButton  onClick={handleLike} aria-label="add to favorites" color={like}>
          <FavoriteIcon  />
        </IconButton>
        </CardActions>
      </Card>
      )
    } else {
      return <Redirect to = {{ pathname: `/recipes/${props.id}` }} />;
    }
}

export default RecipeCard;
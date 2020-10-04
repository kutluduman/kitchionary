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
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

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
  name: {
  display: "flex",
  justifyContent: "center",
  fontFamily: "Roboto"
  },
  description: {
    marginLeft: '20px',
    marginRight: '20px',
    fontSize: '17px'
  },
  cook: {
    marginLeft: '20px',
    fontSize: '19px',
    color: 'orange',
    borderColor: 'orange',
    "&:hover": {
      backgroundColor: "orange[500]"
    },
    fontSize: '15px',
    height: "120px"
  },
  button: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    marginTop: '635px',
    marginLeft: "75px",
    fontSize: '19px',
    color: 'orange',
    borderColor: 'orange',
    "&:hover": {
      backgroundColor: "orange[500]"
    },
    fontSize: '15px',
  },
   like: {
    position: "absolute",
    marginLeft: "400px",
    marginTop: "40px",
    backgroundColor: "white",
  transform: "translate(-50%, -50%)"
   },
   star: {
  position: "absolute",
   transform: "translate(-50%, -50%)",
   marginTop: '635px',
   marginLeft: "350px",
   fontSize: '15px',
   }
});

const RecipeCard = (props) => {

  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [like, setLike] = useState('default');
  const [red, setRed] = useState(true);
  const [rating, setRating] = React.useState(5);
  const [matchingRec, setMatchingRec] = useState([]);

  useEffect(() => {
    const recipe_id = props.id;
    const favourite = {
      user_id: props.cookies,
      recipe_id: props.id,
    }
    axios.post(`http://localhost:8080/favorite/${recipe_id}`, { favourite })
    .then(res => {
      if (res.data.favourited.length === 0 || (res.data.favourited.length === 1 && res.data.favourited.is_favourite === false)) {
        setLike('default')
        setRed(true)
      } else {
        setLike('secondary')
        setRed(false)
      }
    })
    .catch(err => {
    });
    
    axios.post("http://localhost:8080/rating", {recipe_id})
    .then(res => {
      setRating(res.data.rating[0].round);
    })
    .catch(err => {
    });
  }, []);

function truncate(selector) {
if (selector.length > 100) {
    return selector.slice(0,125) + "..."
  } else {
    return selector
  }
}
  const handleLink = (e) => {
    e.preventDefault();
    const recipe = props.name;
    const recipe_id = props.id;

    axios.post(`http://localhost:8080/recipes/${recipe_id}`, { recipe })
      .then(res => {
        props.setRecipeData(res.data.info)
        if (res.status === 200) {
          setRedirect(true)
        }
      })
      .catch(err => {
      })
  };

  const handleLike = () => {
    if (props.cookies.name) {
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
      })
      .catch(err => {

      })
    } else {
      // if red
      setLike('default');
      setRed(true);
      axios.post(`http://localhost:8080/favorite/${recipe_id}/favourites`, { favourite })
      .then(res => {
      })
      .catch(err => {
      })
    }
  }
  }

  if (!redirect) {
  return (
        <Card className={classes.root}>
        <CardActionArea>
        <IconButton onClick={handleLike} size="large" className={classes.like} aria-label="add to favorites" color={like}>
          <FavoriteIcon  />
        </IconButton>
        <Button className={classes.button} onClick= {handleLink} size="large" >
            Cook This!
        </Button>
        <Box component="fieldset" className={classes.star}  mb={3} borderColor="transparent">
        <Rating name="read-only" value={rating} readOnly />
      </Box>
          <CardMedia className={classes.media}
            component="img"
            height="140"
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography className={classes.name} gutterBottom variant="h5" component="h2">
            {props.name}
            </Typography>
            <Typography variant="body2" className={classes.description} color="textSecondary" component="p">
            {truncate(props.description)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      )
    } else {
      return <Redirect to = {{ pathname: `/recipes/${props.id}` }} />;
    }
}

export default RecipeCard;
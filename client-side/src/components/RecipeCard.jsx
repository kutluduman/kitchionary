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
    // marginBottom: '5px',
    fontSize: '19px',
    color: 'orange',
    borderColor: 'orange',
    "&:hover": {
      backgroundColor: "orange[500]"
    },
    fontSize: '15px',
    // marginTop: '20px'
    display:'flex',
    alignSelf: 'flex-end'
  },
  button: {
marginTop: "2.5%",
display: "flex",
justifyContent: "space-between"

  },
   like: {
    position: "absolute",
marginLeft: "400px",
marginTop: "40px",
backgroundColor: "white",

  transform: "translate(-50%, -50%)"
  // -ms-transform: translate(-50%, -50%);
  // background-color: #555;
  // color: white;
  // font-size: 16px;
  // padding: 12px 24px;
  // border: none;
  // cursor: pointer;
  // border-radius: 5px;
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
    
    // const recipe_id = info[0].id;
    axios.post("http://localhost:8080/rating", {recipe_id})
    .then(res => {
      console.log("response for rating", res.data.rating[0].round)
      setRating(res.data.rating[0].round);
    })
    .catch(err => {
      console.log('err', err);
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
        <IconButton onClick={handleLike} size="large" className={classes.like} aria-label="add to favorites" color={like}>
          <FavoriteIcon  />
        </IconButton>
          <CardMedia className={classes.media}
            component="img"
            // alt="Shrimp and Chorizo Paella"
            height="140"
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography className={classes.name} gutterBottom variant="h5" component="h2">
            {props.name}
            </Typography>
            <Typography variant="body2" className={classes.description} color="textSecondary" component="p">
            {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        
        <CardActions className={classes.button}>
        <Button className={classes.cook} onClick= {handleLink} size="large" >
            Cook This!
        </Button>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={rating} readOnly />
      </Box>
        </CardActions>
     
      </Card>
      )
    } else {
      return <Redirect to = {{ pathname: `/recipes/${props.id}` }} />;
    }
}

export default RecipeCard;
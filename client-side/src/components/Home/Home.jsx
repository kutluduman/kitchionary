import React, {useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";
import {createMuiTheme, makeStyles, withStyles, MuiThemeProvider, ThemeProvider, styled } from '@material-ui/core/styles';
import {lightBlue,red } from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { height, width } from '@material-ui/system';
import axios from 'axios';
import { ReactComponent as Logo } from '../../docs/breakfast.jpg'
import RecipeCard from '../Recipes/RecipeCard';
import Grid from '@material-ui/core/Grid';
import "../../styles/quiz.css"

import breakfast from "../../docs/breakfast.jpg";
import lunch from "../../docs/lunch.jpg";
import appetizer from "../../docs/appetizer.jpg";
import dinner from "../../docs/dinner.jpg";
import dessert from "../../docs/dessert.jpg";

import Door from "./Door.jsx";
import Question from "./Question";
import Globe from "./Globe.jsx";
import "../../styles/mode.css";

const images = [
  {
    url: breakfast,
    title:'Breakfast',
    width: '20%',
    href: '/breakfast'
  },
  {
    url: lunch,
    title:'Lunch',
    width: '20%',
    href: '/lunch'
  },
  {
    url: appetizer,
    title:'Appetizer',
    width: '20%',
    href: '/appetizer'
  },
  {
    url: dinner,
    title:'Dinner',
    width: '20%',
    href: '/dinner'
  },
  {
    url: dessert,
    title:'Dessert',
    width: '20%',
    href: '/dessert'
  }
]

const useStyles = makeStyles((theme) => ({
 
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: .75,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
        width: '120px'
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontSize: '28px',
    fontFamily: 'Roboto'
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  rootCard: {
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
  avatar: {
    backgroundColor: red[500],
  },

  recipes: {
    backgroundColor: "orange",
    marginLeft: "4.75%",
    marginRight: "4.75%",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
  }
}));

const Home = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [redirect, setRedirect] = useState(false);
  const [meal, setMeal] = useState('');

  const [matchingRec, setMatchingRec] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/recipes")
    .then(res => {
      setMatchingRec(res.data.recipes)
    })
    .catch(err => {

    });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (category) => {
  setMeal(category)

  axios.post(`http://localhost:8080/${category}`, {category})
    .then(res => {
      props.setMatchingRecipes(res.data.recipes)
      if (res.status === 200) {
        setRedirect(true);
      }
    })
    .catch(err => {

    });
  }

  if (!redirect) {
    return (
      <div className={classes.root}>
          <Helmet>
            <style>{'body { background-color: #fafafa; }'}</style>
          </Helmet>
      {images.map((image) => (
        <ButtonBase
        onClick={() => handleClick(image.title)}
          focusRipple
          key={image.title}
          
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
          
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} >
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    
      ))}
      <div className="mode"> 
        <Door cookies={props.cookies}/> 
        <Question cookies={props.cookies}/> 
        <Globe cookies={props.cookies}/> 
      </div>
      <div className={classes.recipes}>
          <h2 className="featuredTitle"> Kitchionary Featured Recipes </h2>
      <div className="featured">
              <Grid container direction="row" justify="center">
                {matchingRec.map(recipe => {
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
        </div>
      </div>
    );
  } else {
    if (meal === 'Breakfast') {
      return <Redirect to = {{ pathname: "/breakfast" }} />;
    } else if (meal === 'Lunch') {
      return <Redirect to = {{ pathname: "/lunch" }} />;
    } else if (meal === 'Appetizer') {
      return <Redirect to = {{ pathname: "/appetizer" }} />;
    } else if (meal === 'Dinner') {
      return <Redirect to = {{ pathname: "/dinner" }} />;
    } else {
      return <Redirect to = {{ pathname: "/dessert" }} />;
    }
  }
};

export default Home;
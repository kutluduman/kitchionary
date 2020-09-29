import React from 'react';
import {createMuiTheme, makeStyles, withStyles, MuiThemeProvider, ThemeProvider, styled } from '@material-ui/core/styles';
import {lightBlue,red } from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { height } from '@material-ui/system';

import { ReactComponent as Logo } from '../docs/breakfast.jpg'

//door

// import "./door.css";
// // import "./door.js"
// import Door from "./Door";


//quiz
import "./quiz.css"

// food images
import breakfast from "../docs/breakfast.jpg";
import lunch from "../docs/lunch.jpg";
import appetizer from "../docs/appetizer.jpg";
import dinner from "../docs/dinner.jpg";
import dessert from "../docs/dessert.jpg";


import Door from "./Door.jsx";
import Question from "./Question";
import Globe from "./Globe.jsx"
import "../styles/mode.css";


import FeaturedDessert from "./FeaturedDessert"
import FeaturedPasta from "./FeaturedPasta";
import FeaturedSalad from "./FeaturedSalad";



const images = [
  {
    url: breakfast,
    title:'Breakfast',
    width: '20%'
  },
  {
    url: lunch,
    title:'Lunch',
    width: '20%'
  },
  {
    url: appetizer,
    title:'Appetizers',
    width: '20%'
  },
  {
    url: dinner,
    title:'Dinner',
    width: '20%'
  },
  {
    url: dessert,
    title:'Desserts',
    width: '20%'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // // minWidth: 300,
    // width: '100%',
    // justifyContent: 'center'
  },
  image: {

    // margin:'.9%',
    //marginTop: '2%',
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


}));



const Home = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  

  return (

    <div className={classes.root}>
        <Helmet>
           <style>{'body { background-color: #e0e9f1; }'}</style>
         </Helmet>
    {images.map((image) => (
      <ButtonBase
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
        <span className={classes.imageButton}>
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
      <Door/> 
      <Question/>
      <Globe/> 
    </div>
    <h2 className="featuredTitle"> Kitchionary Featured Recipes </h2>
    <div className="featured">
      <FeaturedSalad/>
      <FeaturedPasta/>
      <FeaturedDessert/>
      
    </div>
    
  </div>

  
);

  
}

export default Home;
import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import "./globe.css";
import imageQuestion from "../docs/world_white.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import background from "../docs/white_back.jpg"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    color: 'orange',
    borderColor: 'orange',
    "&:hover": {
      backgroundColor: "orange[500]"
    },
    fontSize: '15px'

  }
}));


const Globe = (props) =>  {
  const classes = useStyles();
  const [redirect,setRedirect]= useState(false);
  
  const handleClick = (e) => {
    // if (props.cookies.name) {
      setRedirect(true);
    // }
  };
  
  if (!redirect) {
    return (
      <div>
        <div className="container">
          <img className='background image' src={background} alt="dessert" width="450" height="650" />
          <img className="globe image" src={imageQuestion} alt="globe" width="260" height="260"/>
        </div>
        <br/>
        <div className="descriptionGlobe">  
          <h1 className="titleGlobe"> GLOBE MODE</h1>
        
        <div className="globeText">
          <Typography variant="h5" align="center" color="textSecondary" component="h3">
                No need to get on a plane to try international cuisines! Discover recipes from around the world!
                </Typography>  
    </div>
    <br/>
          <div className="globeButton">
            
            <Button variant="outlined" className={classes.button} onClick={handleClick}>
              Discover
            </Button>
            </div>
          </div>
      </div>
      )
} else {
  if (!props.cookies.name) {
    return (
      <div>
        <div className="container">
          <img className='background image' src={background} alt="dessert" width="450" height="650" />
          <img className="globe image" src={imageQuestion} alt="globe" width="275" height="275"/>
        </div>
        <div className="descriptionGlobe">  
          <h1 className="titleGlobe"> GLOBE MODE</h1>
        
        <div className="globeText">
          <Typography variant="h5" align="center" color="textSecondary" component="h3">
                No need to get on a plane to try international cuisines! Discover recipes from around the world!
                </Typography>  
            </div>
            <br/>
          <div className="globeButton">
            
            <Button href='#login' variant="outlined" className={classes.button} onClick={handleClick}>
              Discover
            </Button>
            </div>
          </div>
      </div>
      )
  } else {
    return <Redirect to = {{ pathname: "/globe" }} />;
  }
  }
}


export default Globe;
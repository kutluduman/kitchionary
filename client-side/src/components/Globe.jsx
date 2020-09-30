import React from 'react';
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
}));


const Globe = () =>  {
  const classes = useStyles();
  return (
  <div>
    <div className="container">
      <img className='background image' src={background} alt="dessert" width="450" height="825" />
      <img className="globe image" src={imageQuestion} alt="globe" width="300" height="325"/>
    </div>
    <div className="descriptionGlobe">  
      <h1 className="titleGlobe"> GLOBE MODE</h1>
    
    <div className="globeText">
      <Typography variant="h5" align="center" color="textSecondary" component="h3">
            Explore recipes to make with ingredients you already have at home!
            </Typography>  
</div>
<br/>
      <div className="globeButton">
        
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        </div>
      </div>
  </div>
  )
}

export default Globe;
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import imageCoconutSorbet from "../docs/CoconutSorbet.jpg";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    width:500,
    height:500,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },


}));

const  FeaturedDessert = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);






    // axios.post(`/`, { recipe })     .then(res => {
    //     console.log("resss", res.data.info)
    //     props.setRecipeData(res.data.info)
    //     if (res.status === 200) {
    //       setRedirect(true)
    //     }
    //   })
    //   .catch(err => {
    //     // setError("Incorrect Email or Password!");
    //   })
 


  
      










  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
       
        action={
          <IconButton aria-label="settings">
           
          </IconButton>
        }
        title="Pineapple Coconut Sorbet"
       
      />
      <CardMedia
        className={classes.media}
        image={imageCoconutSorbet}
        title="Pineapple Coconut Sorbet"
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
        Just 2 ingredients and 5 minutes prep to make delicious coconut pineapple sorbet. 
        </Typography>
      </CardContent>
      <Button size="large" color="primary">
          Learn More
        </Button>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          
        </IconButton>
        <IconButton aria-label="share">
          
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          
        </IconButton>
      </CardActions>
     
    </Card>
  );
}

export default FeaturedDessert;
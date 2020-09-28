import React from 'react';
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
import imageRavioli from "../docs/Ravioli.jpg";



const useStyles = makeStyles((theme) => ({
  root: {
    width:500,
    height:500,
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

const  FeaturedPasta = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

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
        title="Smoked Cheese Ravioli"
       
      />
      <CardMedia
        className={classes.media}
        image={imageRavioli}
        title="Smoked Cheese Ravioli"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Quick and easy but tastes gourmet!
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

export default FeaturedPasta;
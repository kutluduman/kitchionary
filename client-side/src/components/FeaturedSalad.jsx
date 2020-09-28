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
import imagePerfectGuacamole from "../docs/Perfect_Guacamole.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
  width:500,
  height:500,
  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },


}));

const  FeaturedSalad = () => {
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
        title="Perfect Guacamole"
       
      />
      <CardMedia
        className={classes.media}
        image={imagePerfectGuacamole}
        title="Perfect Guacamole"
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
        The perfect guacamole!
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
        
      </CardActions>
     
    </Card>
  );
}
export default FeaturedSalad;
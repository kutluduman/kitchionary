import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
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

}));






const Favorite = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = useState('default');
  const [red, setRed] = useState(false);

  const [matchingRec, setMatchingRec] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8080/favorite", props.cookies)
    .then(res => {
      console.log("resss", res.data)
      setMatchingRec(res.data.recipes)
    })
    .catch(err => {
      // setError("Incorrect Email or Password!");
    });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    // if grey
    if(like === 'default') {
      setLike('secondary');
      setRed(true)
      axios.post(`http://localhost:8080/favorite`, {  })
      .then(res => {
        // console.log("resss", res.data.info)
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
      setRed(false);
      axios.post(`http://localhost:8080/recipes/favorite`, {  })
      .then(res => {
        // console.log("resss", res.data.info)
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


  return(
    <div>
     <Card className={classes.root}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton  onClick={handleLike} aria-label="add to favorites" color={like}>
          <FavoriteIcon  />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
    </div>
  )

}


export default Favorite;
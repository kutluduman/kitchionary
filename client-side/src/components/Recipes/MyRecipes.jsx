import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard';

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

const MyRecipe = (props) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = useState('default');
  const [matchingRec, setMatchingRec] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios.post("http://localhost:8080/myrecipes", props.cookies)
    .then(res => {
      setMatchingRec(res.data.recipes)
    })
    .catch(err => {
    });
  }, []);

  return (
    <div>
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
  )
}

export default MyRecipe;
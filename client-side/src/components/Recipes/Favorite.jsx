import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  favoritesHeader : {
    padding: 50,
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
     backgroundColor: 'orange',
    width: '1200px',  
    marginTop: "150px",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',   
  }, 
}));

const Favorite = (props) => {
  const classes = useStyles();
  const [matchingRec, setMatchingRec] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8080/favorite", props.cookies)
    .then(res => {
      setMatchingRec(res.data.favourites)
    })
    .catch(err => {
    });
  }, []);




  return(
    <div>
<h1 className={classes.favoritesHeader}> My Favourites </h1>
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
    </div>
  )
}


export default Favorite;
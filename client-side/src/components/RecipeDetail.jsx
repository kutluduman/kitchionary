import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import sample from '../docs/sample.jpg';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import IngredientDetails from './IngredientDetails';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBreadSlice,faCheese,faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';
import SpaIcon from '@material-ui/icons/Spa';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  
  media: {
        width: 700,
        height: 700,
        marginTop: 30,
        marginLeft: 45,
        
      },
  cont: {
   marginTop: 30,
   
  },

  title:{
    marginTop: 110,
  }

}));

function RecipeDetail(props) {
  const classes = useStyles();
  const [rating, setRating] = React.useState(5);
  const info = props.recipeData;
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const recipe_id = info[0].id;
    axios.post("http://localhost:8080/rating", {recipe_id})
    .then(res => {
      console.log("response for rating", res.data.rating[0].round)
      setRating(res.data.rating[0].round);
    })
    .catch(err => {
      console.log('err', err);
    });
  }, []);

  console.log("PROPS recipeData", props.recipeData);
  console.log("INFO", info[0])

    const handleChange = (event, newValue) => {
      setValue(newValue);
      const rating = {
        user_id: props.cookies,
        recipe_id: info[0].id,
        rating: newValue,
      }
      axios.post(`http://localhost:8080/rating/new`, {rating})
      .then(res => {
        console.log("rating", res.data.rating)
     
      })
      .catch(err => {
       
      })
    }

  return (
    <Row>
      <Col span={5}>
        <CardMedia
        // INSERT RECIPE IMAGE
          className={classes.media}
          image={info[0].img_url}
          title={info[0].name}
        />
      </Col>
      <Col span={6}>

        <Col  className={classes.cont} span={3}>
        
        <Box className="rating" component="fieldset" mb={3} borderColor="transparent">
          {/* INSERT RECIPE OWNER */}
         <h3><FaceIcon fontSize="medium" color="primary"/> {info[0].first_name} {info[0].last_name}</h3> 
          {/* INSERT RECIPE TIME */}
            <h3><AccessTimeIcon fontSize="medium" color="secondary"/> {info[0].time} min</h3> 
            <Box component="fieldset" mb={3} borderColor="transparent">
              <h3>Rating:</h3>
             <Rating name="read-only" value={rating} readOnly />
           </Box>
           
           <Box component="fieldset" mb={3} borderColor="transparent">
             <h3>Your Rating:</h3>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={handleChange}
              />
              </Box>
        </Box>


<div>
<FontAwesomeIcon className="fa.fa-signal" icon={faBreadSlice} />
<span>Gluten Free</span>
</div>
<br/>
<div>
<FontAwesomeIcon className="fa.fa-signal" icon={faCheese} />
<span>Dairy Free</span>
</div>
<br/>
<div>
<SpaIcon/>
<span>Nut Free</span>
<br/>
</div>
<div>
<br/>
<FontAwesomeIcon className="fa.fa-signal" icon={faLeaf} />
<span>Vegan</span>
</div>
<br/>
<div>
<FontAwesomeIcon className="fa.fa-signal" icon={faSeedling} />
<span>Vegetarian</span>
</div>

        
        <Typography variant="h5" color="textSecondary">
          {/* INSERT RECIPE INGREDIENTS */}
          <h3>Ingredients</h3>
          {props.recipeData.map(ingredient => {
          return (
            <IngredientDetails 
            ingredient={ingredient.ingredient}
            amount={ingredient.amount}
            unit={ingredient.unit}
            />
          );
          })
          }

        </Typography>
        </Col>
        <Col span={9}>
          
        <Typography className={classes.title} variant="h3" component="h2" align="center">
            {/* INSERT RECIPE NAME */}
          {info[0].name}
        </Typography>
        <br/>
        <Typography >
            {/* INSERT RECIPE DESCRIPTION */}
            {info[0].description_one}
        </Typography>
            <Typography variant="h5" color="textSecondary">
          {/* INSERT DIRECTIONS */}
          <p>
            {info[0].directions_one}
          </p>      
          <p>
            {info[0].directions_two}
          </p>  
          <p>
            {info[0].directions_three}
          </p>  
          <p>
            {info[0].directions_four}
          </p>  
          <p>
            {info[0].directions_five}
          </p>  
          <p>
            {info[0].directions_six}
          </p>     
        </Typography>
        </Col>
      </Col>
    </Row>
  );
}


export default RecipeDetail;



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
import '../styles/detail.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  media: {
        width: "1528px",
        height: 360,
        
        justifyContent: 'center',
        display:'flex',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
      },
  cont: {
   marginTop: 30,
  marginLeft: "300px",
   width: "70%",
  marginBottom: 30,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)',
  },
  title:{
    marginTop: 57,
    fontFamily: "Roboto",
    backgroundColor: "orange"
  },
  row: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  row2: {
    display: "flex",
  },
  stars: {
    display:"flex",
    marginLeft: "40px"
  },
  col1: {
    marginLeft: "55px",
    marginTop: "30px"
  },
  col2: {
    width: "72%",
    marginLeft: "55px"
  },
  ratingsTitle:{
    marginBottom: 0
  },
  ingredientsTitle:{
    marginTop:"-5px",
    marginBottom: 9,
    color: "black",
    backgroundColor: "orange",
    justifyContent: "center",
    display: "flex"
  },
  diet: {
  padding: "14px"
  },
  nut: {
    padding: "10px"
    },
  desc: {
    fontSize: "22px",
    fontFamily: "Roboto",
    color: "gray",
    borderBottom: "#80808047 2px solid",
    paddingBottom: "30px",
    textAlign: "center"
  },
  dir: {
   fontSize: "20px"
  },
  ingredients: {
    marginBottom: "30px"
  }
}));

function RecipeDetail(props) {
  const classes = useStyles();
  const [rating, setRating] = React.useState(5);
  const info = props.recipeData;
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const recipe_id = info[0].id;
    axios.post("http:localhost:8080/rating", {recipe_id})
    .then(res => {
      setRating(res.data.rating[0].round);
    })
    .catch(err => {
    });
  }, []);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      const rating = {
        user_id: props.cookies,
        recipe_id: info[0].id,
        rating: newValue,
      }
      axios.post(`http:localhost:8080/rating/new`, {rating})
      .then(res => {
      })
      .catch(err => {
      })
    }

  return (
<div className={classes.cont}>
   <Row className={classes.row}>
      <CardMedia
          INSERT RECIPE IMAGE
          className={classes.media}
           image={info[0].img_url}
          title={info[0].name}
         />
    </Row>
    <Row  className={classes.row2}>
      <Col className={classes.col1}>
      <h3><FaceIcon fontSize="medium" color="primary"/> {info[0].first_name} {info[0].last_name}</h3> 
      <h3><AccessTimeIcon fontSize="medium" color="secondary"/> {info[0].time} min</h3>
            <Box  component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={rating} readOnly />
         </Box>
<div className={classes.ingredients}>
         <Typography variant="h5" color="textSecondary">
          {/* INSERT RECIPE INGREDIENTS */}
          <h3 className={classes.ingredientsTitle} >Ingredients</h3>
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
        </div>
         <div>
      <div>
        {info[0].is_gluten_free && <div>
        <FontAwesomeIcon className="fa.fa-signal" icon={faBreadSlice} />
        <span className={classes.diet}>  Gluten Free</span>
        </div>}
        </div>
        <br/>
        <div>
        {info[0].is_dairy_free && <div>
        <FontAwesomeIcon className="fa.fa-signal" icon={faCheese} />
        <span className={classes.diet}>  Dairy Free</span>
        </div>}
        </div>
        <br/>
        <div>
        {info[0].is_nut_free && <div>
        <SpaIcon/>
        <span className={classes.nut}>  Nut Free</span>
        </div>}
        </div>
        <br/>
        <div>
        {info[0].vegan && <div>
        <FontAwesomeIcon className="fa.fa-signal" icon={faLeaf} />
        <span className={classes.diet}>  Vegan</span>
        </div>}
        </div>
        <br/>
        <div>
        {info[0].vegetarian && <div>
        <FontAwesomeIcon className="fa.fa-signal"icon={faSeedling} />
        <span className={classes.diet}>  Vegetarian</span>
        </div>}
        </div>
        </div>
      </Col>
      <Col className={classes.col2}>
        <div className={classes.col2}>
           <Typography className={classes.title} variant="h3" component="h2" align="center">
          {info[0].name}
        </Typography>
        <br/>
        <Typography className={classes.desc}>
            {info[0].description}
        </Typography>
        <h2 className={classes.titleDir}> Directions</h2>
            <Typography variant="h5" >
          <p className={classes.dir}>
            {info[0].directions_one}
          </p>     
          <p className={classes.dir}>
            {info[0].directions_two}
          </p> 
          <p className={classes.dir}>
            {info[0].directions_three}
          </p> 
          <p className={classes.dir}>
            {info[0].directions_four}
          </p> 
          <p className={classes.dir}>
            {info[0].directions_five}
          </p > 
          <p className={classes.dir}>
            {info[0].directions_six}
          </p>    
        </Typography>
        </div>
        <Box component="fieldset" mb={3}    className={classes.stars} borderColor="transparent">
             <h3>Your Rating:</h3>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={handleChange}
              />
              </Box>
      </Col>
    </Row>
    </div>
  );
}


export default RecipeDetail;



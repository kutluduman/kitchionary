import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import "./door.css";
import background from "../docs/white_back.jpg"
import fridge from "../docs/fridge.jpg";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    fontSize: '15px',
    marginTop: '20px'
  },
  description: {
    width: "235px",
    display: "flex",
    justifyContent: "center",
    marginLeft: "-10px",
    fontFamily: "Roboto"

  }
}));

const Door = (props) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);

  const hover = e => {
    const element = document.querySelector(".door");
  element.addEventListener("mouseover", () => console.log('Event: mouseover'));
    element.classList.toggle("doorOpen");
  }

  const handleClick = (e) => {
    // if (props.cookies.name) {
      setRedirect(true);
    // }
  };

  if (!redirect) {
  return (
    <div className="container">
      <img className='background image' src={background} alt="dessert" width="450" height="650" />
        <div className="backDoor" onMouseOver={hover} >
          <div className="door"> 
            <img  src={fridge} alt="question" width="200" height="270" />
            </div>
        <div> 
        <h1 className="titleFridge"> FRIDGE MODE</h1>
            <Typography  className={classes.description} variant="h5" align="center" color="textSecondary" component="h3">
            Explore recipes to make with ingredients you already have at home!
            </Typography>
            <br/>
            <div className="fridgeButton">
              <Button onClick={handleClick} size="large" className={classes.button} variant="outlined" >Explore</Button>
            </div>
          </div>
        </div>
    </div>
  
  )
  } else {
    if (!props.cookies.name) {
      return <Redirect to = {{ pathname: "#login" }} />;
    } else {
      return <Redirect to = {{ pathname: "/fridge" }} />;
    }
  }
};

export default Door;
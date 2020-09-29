import React from 'react';
import { Redirect } from "react-router-dom";
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue} from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';
import FridgeAvatar from './FridgeAvatar';
import FridgeCheckbox from './FridgeCheckbox';
import {Select,MenuItem, FormControl, InputLabel} from '@material-ui/core';
import axios from 'axios';

import "./fridgeMealCheck.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(5),
    width: '25ch',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
  },
  avatar: {
    marginTop: theme.spacing(8),
  },
  submit: {
    marginTop: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    mindWidth:100,
    marginTop: theme.spacing(20),
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: orange[400],
    "&:hover": {
      backgroundColor: orange[500]
    },
  }
}))(Button);

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});


const FridgeForm = () => {
  const classes = useStyles();


  console.log('cb1', state.cb1);
  console.log('cb2', state.cb2);
  console.log('cb3', state.cb3);
  console.log('cb4', state.cb4);
  const handleSubmit = () => {
    // const state = {
    //   cb1,
    //   cb2,
    //   cb3,
    //   cb4
    //  }
 
 
  //  axios.post(`http://localhost:8080/recipe`, { user })
  //    .then(res => {
  //     return <Redirect to = {{ pathname: "/??" }} />;
  //    })
  //    .catch(err => {
  //     res.status(500).json({ error: err.message });
  //     // or set error state
  //    })
  };

  return (
    <article className={classes.root}>
       <Helmet>
           <style>{'body { background-color: #d1e1ef; }'}</style>
         </Helmet>
      <form onSubmit={handleSubmit}>
        <h1 className='fridgeTitle'>Fridge Mode</h1>
        <h2 className='fridgeSubtitle'>Step One: What meal are you cooking?</h2>
        <div className={classes.avatar}>
          <FridgeAvatar/>
        </div>
        <h2 className='fridgeSubtitle'>Step Two: Any dietary restrictions?</h2>
        <div className={classes.checkbox}>
          <FridgeCheckbox/>
        </div>
        <h2 className='fridgeSubtitle'> Step Three: What ingredients do you want to cook with?</h2>
    <TextField
          label="Name"
          id="outlined-margin-normal"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Amount"
          id="outlined-margin-normal"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Culture"
          id="outlined-margin-normal"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
         <TextField
          label="Culture"
          id="outlined-margin-normal"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <div className={classes.submit}>
        <ColorButton size="large" type = 'submit' variant="contained" >Submit</ColorButton>
        </div>
        </form>
    </article>
  )
}

export default FridgeForm;
import React from 'react';
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue} from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';
import FridgeAvatar from './FridgeAvatar';
import FridgeCheckbox from './FridgeCheckbox';
import {Select,MenuItem, FormControl, InputLabel} from '@material-ui/core';

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

  return (
    <article className={classes.root}>
       <Helmet>
           <style>{'body { background-color: #d1e1ef; }'}</style>
         </Helmet>
      <form>
        <div className={classes.avatar}>
          <FridgeAvatar/>
        </div>
        <div className={classes.checkbox}>
          <FridgeCheckbox/>
        </div>
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
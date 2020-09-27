import React from 'react';
import {createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textField: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    width: '25ch',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
  },
  phoneNumber: {
    marginLeft: theme.spacing(22),
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
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



const RegisterTemplate = () => {
  const classes = useStyles();

  return (
    <section>
      <h2 className={classes.root}>Register</h2>
    <div className={classes.root}>
      <div>
        <br/>
        <TextField
          label="First Name"
          id="outlined-margin-normal"
          placeholder="First Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />
         <TextField
          label="Last Name"
          id="outlined-margin-normal"
          placeholder="Last Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />
        <div>
        <TextField
          label="Email"
          id="outlined-margin-normal"
          placeholder="Email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />
         <TextField
          label="Password"
          id="outlined-margin-normal"
          placeholder="Password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />
        </div>
        <div>
        <TextField
          label="Phone Number"
          id="outlined-margin-normal"
          placeholder="Phone Number"
          className={classes.phoneNumber}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />
        </div>
        <br/>
        <div className={classes.root}>
        <ColorButton variant="contained" color="primary">Register</ColorButton>
        </div>
        <div className={classes.root}>
          <p>Already have an Account?</p>
        </div>
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
        <Button variant="outlined" color="primary">Sign In</Button>
        </div>
        </ThemeProvider>
      </div>
    </div>
    </section>
  )
}

export default RegisterTemplate;
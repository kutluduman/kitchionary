import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(5),
    width: '25ch',
  },
  phoneNumber: {
    marginLeft: theme.spacing(20)
  }

}));


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
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
         <TextField
          label="Last Name"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
        <div>
        <TextField
          label="Email"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
         <TextField
          label="Password"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
        </div>
        <div>
        <TextField
          label="Phone Number"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.phoneNumber}
          margin="normal"
          variant="outlined"
        />
        </div>
        <br/>
        <div className={classes.root}>
        <Button variant="contained" color="primary">Register</Button>
        </div>
        <div className={classes.root}>
          <p>Already have an Account?</p>
        </div>
        <div className={classes.root}>
        <Button variant="outlined" color="primary">Sign In!</Button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default RegisterTemplate;
import React,{useState} from 'react';
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue} from "@material-ui/core/colors";
import axios from 'axios';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Register from "./Register";
import  useRegister from './useRegister';
import  useLogin from './useLogin';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: '25ch',
     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
    buttonColor: {
      backgroundColor: '#0063cc',
    }

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





const LoginTemplate = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {registerShowing, toggleRegister} = useRegister();
  const {loginShowing, toggleLogin} = useLogin();

  const validate = () => {
    if (!email || !password) {
      setError("Email is required!");
      console.log("NO EMAIL OR PASSWORD",error)
      return;
    } 
    if (!password) {
      setError("Password is required!");
      console.log(error);
    }
     const user = {
       email,
       password
      }

     setError("NOT BLANK");
  
  
    axios.post(`http://localhost:8080/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        toggleLogin()
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();

  }
  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }


  return (
    <section>
      <h2 className={classes.root}>Login</h2>
    <div className={classes.root}>
      <div>
        <br/>
        <form onSubmit={handleSubmit}>
        <TextField onChange={handleChangeEmail}
          label="Email"
          value={email}
          id="outlined-margin-normal"
          placeholder="Email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        />
         
        <div>
        <TextField onChange={handleChangePassword}
          label="Password"
          value={password}
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
        <br/>
        <div className={classes.root}>
        <ColorButton type = 'submit' variant="contained" >Login</ColorButton>
        </div>
        </form>
        <div className={classes.root}>
          <p>Don't have an Account?</p>
        </div>
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
      <Button hide={toggleLogin} onClick={toggleRegister} variant="outlined" color="primary">Register</Button>
        <Register registerShowing={registerShowing} hide={toggleRegister}/>
        </div>
        </ThemeProvider>
      </div>
    </div>
    </section>
  )
}

export default LoginTemplate;
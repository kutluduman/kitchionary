import React,{useState} from 'react';
import { Redirect } from "react-router-dom";
// import { useCookies } from 'react-cookie';
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue} from "@material-ui/core/colors";
import axios from 'axios';
import PasswordField from 'material-ui-password-field'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Register from "../Register";
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
    height: '70px',
    width: '25ch',
     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
    buttonColor: {
      backgroundColor: '#0063cc',
    },

  },
  iconButton: {
    color: "orange",
    backgroundColor: "orange",
  },    
  icon: {
    color: "orange",
    backgroundColor: "orange",
  }, 

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
    primary: orange,
  },
});

const LoginTemplate = (props) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [cookies, setCookie] = useCookies(['name']);

  const validate = () => {
    if (!email) {
      setError("Email is required!");
      return;
    } 
    if (!password) {
      setError("Password is required!");
      return;
    }

     const user = {
       email,
       password
      }
  
    axios.post(`http://localhost:8080/login`, { user })
      .then(res => {
        if (res.status === 200) {
          props.setCookie('name', user.email, {path: '/'});
          setRedirect(true);
        }
      })
      .catch(err => {
        setError("Incorrect Email or Password!");
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();
    
    setEmail('')
    setPassword('')
  }
  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  if (!redirect){

  return (
    <section>
      <div className="modal-overlay"/>
      
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
      <div className="modal-header">
       <a href="#"><span aria-hidden="true">&times;</span></a>
       </div>
      <h2 className={classes.root}>Login</h2>
    <div className={classes.root}>
      <div>
        <br/>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <TextField onChange={handleChangeEmail}
          // label="Email"
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
        {/* <TextField onChange={handleChangePassword}
          // label="Password"
          value={password}
          id="outlined-margin-normal"
          placeholder="Password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }}
        /> */}
        <PasswordField
        onChange={handleChangePassword}
        value={password}
        className={classes.textField}
          hintText="At least 8 characters"
          floatingLabelText="Enter your password"
          errorText="Your password is too short"
          iconButton={{
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
        <Button href="#register"  color="primary">Register</Button>
          
        </div>
        </ThemeProvider>
      </div>
      </div>
      </div>
    </div>
    </section>
  )

  } else {
    return <Redirect to = {{ pathname: "/" }} />;
  }
}

export default LoginTemplate;
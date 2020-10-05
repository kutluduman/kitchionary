import React,{useState} from 'react';
import { Redirect } from "react-router-dom";
import {createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange } from "@material-ui/core/colors";
import axios from 'axios';

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
    primary: orange,
  },
});

const RegisterTemplate = (props) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function validate() {
    if(!firstName){
      setError("First Name is required!");
      return false;
    }
    if(!lastName){
      setError("Last Name is required!");
      return false;
    }
    if(!email){
      setError("Email is required!");
      return false;
    }
    if(!password){
      setError("Password is required!");
      return false;
    }
    if(!phoneNumber){
      setError("Phone Number is required!");
      return false;
    }

    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone_number: phoneNumber
    };

    axios.post(`http://localhost:8080/register`, user)
      .then(res => {
        if (res.status === 200) {
          props.setCookie('name', user.email, {path: '/'});
          setRedirect(true);
        }
      })
      .catch(err => {
        setError("Account already exists!");
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    validate();

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
  }

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
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
      <h2 className={classes.root}>Register</h2>
    <div className={classes.root}>
      <div>
        <br/>
        {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChangeFirstName}
          value={firstName}
          id="outlined-margin-normal"
          placeholder="First Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: 'orange' },
          }  
        }
        />
         <TextField onChange={handleChangeLastName}
          value={lastName}
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
        <TextField onChange={handleChangeEmail}
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
         <TextField onChange={handleChangePassword}
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
        <div>
        <TextField onChange={handleChangePhoneNumber}
          value={phoneNumber}
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
        <ColorButton type='submit' variant="contained" color="primary">Register</ColorButton>
        </div>
      </form>
        <div className={classes.root}>
          <p>Already have an Account?</p>
        </div>
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
        <Button href="#login"  color="primary">Login</Button>
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

export default RegisterTemplate;
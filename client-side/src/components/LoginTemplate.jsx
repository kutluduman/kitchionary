import React,{useState} from 'react';
import { createMuiTheme, makeStyles, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { orange, lightBlue} from "@material-ui/core/colors";
import axios from 'axios';


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

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios.post(`http://localhost:8080/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
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
        <Button variant="outlined" color="primary">Register</Button>
        </div>
        </ThemeProvider>
      </div>
    </div>
    </section>
  )
}

export default LoginTemplate;
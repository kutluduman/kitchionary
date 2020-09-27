import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import logo from "../docs/Kitchionary_logo_white.jpg";
import "../styles/navbar.css";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { orange, lightBlue } from "@material-ui/core/colors";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



//popout

import Login from "./Login";
import  useLogin from './useLogin';
import Register from "./Register";
import  useRegister from './useRegister';


const useStyles = makeStyles((theme) => ({
    
    root: { 
      marginLeft: 'auto',
    },
  
    menuButton: {
      margin: theme.spacing(5),
      color: 'orange'

    },
    search: {

      //font color: #37ade0
      position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.05),
      },

    width: '100%',
    [theme.breakpoints.up('sm')]: {

      width: 'auto',
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#37ade0',
    },
    inputRoot: {
      color: 'black',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
    
}));

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: lightBlue,
    "&:hover": {
      backgroundColor: orange[100]
    },
    margin: 10
    
  }
}))(Button);

function Navbar() {


  const classes = useStyles();
  //popout
  const {loginShowing, toggleLogin} = useLogin();
  const {registerShowing, toggleRegister} = useRegister();

  
  return (
    
    <div>
    <AppBar position="static">
      <main className='banner'>
    <Toolbar>
    <Typography variant="h6">
        <img src={logo} className= "logo" alt="logo"></img>
      </Typography>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        <div   className={classes.root}>
        
          <ColorButton startIcon={<ExitToAppIcon />} onClick={toggleLogin}> Login</ColorButton>
            <Login loginShowing={loginShowing} hide={toggleLogin}/>
       
            <ColorButton startIcon={<AccountCircleIcon />} onClick={toggleRegister}>Sign Up</ColorButton>
            <Register registerShowing={registerShowing} hide={toggleRegister}/>

          
      </div>
  </Toolbar>
  </main>
</AppBar>
</div>
  );
}

export default Navbar;
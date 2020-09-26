import React,{useState} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import logo from "../docs/Kitchionary_logo.jpg";
import "../styles/navbar.css";

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

    },
    search: {
      position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
    },
    inputRoot: {
      color: 'inherit',
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
    }
}));

function Navbar() {

  const [sign, setSign] = useState(false);
  const [login, setLogin] = useState(false);


  const onOpenModal = () => {
    setSign(true);
  };

  const onOpenModalLogin = () => {
    setLogin(true);
  };

 const onCloseModal = () => {
    setSign(false);
  };

  const onCloseModalLogin = () => {
    setLogin(false);
  };




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
        <div  className="navButton" className={classes.root}>
        
          <Button onClick={toggleLogin}> Login</Button>
            <Login loginShowing={loginShowing} hide={toggleLogin}/>
       
          <Button onClick={toggleRegister}>Sign Up</Button>
            <Register registerShowing={registerShowing} hide={toggleRegister}/>
      </div>
  </Toolbar>
  </main>
</AppBar>
</div>
  );
}

export default Navbar;
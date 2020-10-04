import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import logo from "../docs/Kitchionary_logo_white.jpg";
import "../styles/navbar.css";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { orange, lightBlue } from "@material-ui/core/colors";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HelpIcon from '@material-ui/icons/Help';
import Login from "./Login";
import useLogin from "../Users/useLogin";
import Register from "../Users/Register";
import useRegister from "../Users/useRegister";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    display: "flex",
  },

  menuButton: {
    marginLeft: theme.spacing(2),
    color: "orange",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  search2: {
    marginLeft: '500px',
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0,1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "orange",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(12)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },

  name :{
    fontFamily: 'Roboto',
    color: "black",
    fontSize: '18px',
    padding: "30px"
  },
  navIcon: {
    marginLeft: '20px', 
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: lightBlue,
    "&:hover": {
      backgroundColor: orange[100],
    },
    margin: 10,
  },
}))(Button);

function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [redirect,setRedirect] = useState('false');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveCookie = () => {
    props.removeCookie("name");
  };

  if (!props.cookies.name) {
    return (
      <div>
        <AppBar position="static">
          <main className="banner">
            <Toolbar>
              <Typography variant="h6">
                <Button href="http://localhost:3000/">
                  {" "}
                  <img src={logo} className="logo" alt="logo"></img>{" "}
                </Button>
              </Typography>
              <div className={classes.root}>
                <ColorButton href="#login" startIcon={<ExitToAppIcon />}>
                  {" "}
                  Login{" "}
                </ColorButton>
                <ColorButton href="#register" startIcon={<AccountCircleIcon />}>
                  {" "}
                  Register{" "}
                </ColorButton>
              </div>
            </Toolbar>
          </main>
        </AppBar>
      </div>
    );   
  } else {
    return (
      <div>
        <AppBar position="static">
          <main className="banner">
            <Toolbar>
              <Typography variant="h6">
                <Button href="http://localhost:3000/">
                  {" "}
                  <img src={logo} className="logo" alt="logo"></img>{" "}
                </Button>
              </Typography>
                <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link
                    to="/myrecipes"
                    style={{ textDecoration: "none", display: "block", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>My Recipes</MenuItem>
                  </Link>
                  <Link
                    to="/favorite"
                    style={{ textDecoration: "none", display: "block", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>Favorites</MenuItem>
                  </Link>
                  <Link
                    to="/add"
                    style={{ textDecoration: "none", display: "block", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>New Recipe</MenuItem>
                  </Link>
                  
                </Menu>
                </IconButton>
    
                <div className={classes.navIcon}>
                  <Link to='/fridge'>
                  <IconButton>
                    <MeetingRoomIcon fontSize="medium" style={{ color: orange[400] }}  />            
                  </IconButton>
                  </Link>
                  </div>
                  <div className={classes.navIcon}>
                  <Link to='/quiz'>
                  <IconButton>
                    <HelpIcon fontSize="medium" style={{ color: orange[400] }}/>            
                  </IconButton>
                  </Link>
                  </div>
                  <div className={classes.navIcon}>
                  <Link to='/globe'>
                  <IconButton>
                    <PublicIcon fontSize="medium" style={{ color: orange[400] }}/>            
                  </IconButton>
                  </Link>
                  </div>
              <div className={classes.root}>
                <h2 className={classes.name}> Logged in as {props.cookies.name}!</h2>
                <ColorButton onClick={handleRemoveCookie} href="/">
                  {" "}
                  Logout
                  <Redirect to={{ pathname: "/" }} />
                </ColorButton>
              </div>
            </Toolbar>
          </main>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;

import React from "react";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
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

//popout

import Login from "./Login";
import useLogin from "./useLogin";
import Register from "./Register";
import useRegister from "./useRegister";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    display: "flex",
    // backgroundColor:orange,
  },

  menuButton: {
    margin: theme.spacing(5),
    color: "orange",
  },
  search: {
    //font color: #37ade0
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
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#37ade0",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
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

function Navbar() {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // console.log(cookies)
  //popout
  // const {loginShowing, toggleLogin} = useLogin();
  // const {registerShowing, toggleRegister} = useRegister();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveCookie = () => {
    removeCookie("name");
  };

  if (!cookies.name) {
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
                    to="/fridge"
                    style={{ textDecoration: "none", display: "block", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>My Recipes</MenuItem>
                  </Link>
                  <Link
                    to="/quiz"
                    style={{ textDecoration: "none", display: "block", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>Saved Recipes</MenuItem>
                  </Link>
                </Menu>
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
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
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
                <img src={logo} className="logo" alt="logo"></img>
              </Typography>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
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
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className={classes.root}>
                <p className="Name">Logged in as {cookies.name}!</p>
                <ColorButton onClick={handleRemoveCookie}>
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

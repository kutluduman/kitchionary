import React from 'react';
import {createMuiTheme, makeStyles, withStyles, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';
import {lightBlue } from "@material-ui/core/colors";
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    
  root: { 
    backgroundColor: 'blue'
  },
}));

// const theme = createMuiTheme({
//   palette: {
//     primary: lightBlue,
//   },
// });




const Home = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
    </Paper>
  )
}

export default Home;
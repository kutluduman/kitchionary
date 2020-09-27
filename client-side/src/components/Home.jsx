import React from 'react';
import {createMuiTheme, makeStyles, withStyles, MuiThemeProvider, ThemeProvider, styled } from '@material-ui/core/styles';
import {lightBlue } from "@material-ui/core/colors";
import {Helmet} from 'react-helmet';



const Home = () => {

  return (
   <div>
       <p>ITS A GREAT DAY :D</p>
       <Helmet>
                <style>{'body { background-color: #8BC2D8; }'}</style>
            </Helmet>
   </div>
  )
}

export default Home;
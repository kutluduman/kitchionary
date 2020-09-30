// import React,{useState} from "react";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import { createMuiTheme, makeStyles, withStyles, ThemeProvider,useTheme } from '@material-ui/core/styles';
// import {Helmet} from 'react-helmet';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import { red } from '@material-ui/core/colors';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import sample from '../docs/sample.jpg';
import Typography from '@material-ui/core/Typography';
// import "../styles/card.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';




// const useStyles = makeStyles((theme) => ({
//   media: {
//     width: 500,
//     height: 500,
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//  table: {
//    minWidth:650,
//  }
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// const RecipeDetail = () => {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div>
//       {/* <Helmet>
//            <style>{'body { background-color: #d1e1ef; }'}</style>
//          </Helmet>
//          <div>
          
//          <Card className="card">
//          <Grid container justify = "center">
//       <CardHeader
//         title="Shrimp and Chorizo Paella"
//         subheader=""
//       />
//        <Grid container justify = "center">
//       <CardMedia
//         className={classes.media}
//         image={sample}
//         title="Paella dish"
//       />
//       </Grid>
//       </Grid>
//       <CardContent>
//       <Grid container justify = "center">
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//         </Grid>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//         <Grid container justify = "center">
//           <Typography paragraph>Method:</Typography>
//           </Grid>
//           <Grid container justify = "center">
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//           </Grid>
//         </CardContent>
//       </Collapse>
//     </Card>
//          </div>
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer> */}




//     </div> 
//   );
// };

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1 
  },
  //   marginTop: "60px",
  
  // },
  
  media: {
        width: 700,
        height: 700,
        marginTop: 30,
        marginLeft: 15,
        
      },
  // direction: {
  //   // display:"flex",
  //   // justifyContent:"space-around",
  //   width: "1020px",
  //   // marginRight: "40px",
  //   // alignItems: "row",
  //   height: "20px"
  // },

  // direction2: {
  // marginTop: "100px",
  // width: "30em"
  // }

  cont: {
   marginTop: 30,
  },

  title:{
    marginTop: 110,
  }

}));

function RecipeDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);


  // const bull = <span className={classes.bullet}>•</span>;

  return (

    <Row>
      <Col span={5}>
        <CardMedia
          className={classes.media}
          image={sample}
          title="Paella dish"
        />
      </Col>
      <Col span={5}>

        <Col  className={classes.cont} span={3}>
        <Box className="rating" component="fieldset" mb={3} borderColor="transparent">
            <h3><FaceIcon fontSize="medium" color="primary"/> James Smith</h3> 
            <h3><AccessTimeIcon fontSize="medium" color="secondary"/> 40 min</h3> 
            <Rating name="read-only" value={value} readOnly></Rating>
        </Box>
        <Typography variant="h5" color="textSecondary">

          <h3>Ingredients</h3>
              <ListItemText primary="Olive Oil" secondary="2 tablespoons"/>
              <Divider variant="inset" component="li" />
              <ListItemText primary="Bomba rice or Arborio" secondary="2 1.5 cups"/>
              <Divider variant="inset" component="li" />
              <ListItemText primary="Chicken Stock" secondary="3 cups"/>
              <Divider variant="inset" component="li" />
              <ListItemText primary="Chicken Stock" secondary="3 cups"/>
        </Typography>
        </Col>
        <Col span={9}>
          
        <Typography className={classes.title} variant="h3" component="h2" align="center">
          Shrimp and Chorizo Paella
        </Typography>
        <br/>
        <Typography >
        Spanish Rice Dish Paella Recipe ‐ This simple Shrimp and Chorizo Paella is easy to make, has classic paella ingredients with all Spanish flavors. Feed and impress a crowd with this paella recipe!
        </Typography>
            <Typography variant="h5" color="textSecondary">
          {/* INSERT DIRECTIONS */}
          <p>
            Heat olive oil over medium-low heat in a saucepan; stir anchovy fillets into olive oil and cook, stirring often, until the fillets begin to sizzle, about 1 minute. Mix garlic into oil and cook just until fragrant, 1 minute more. Add fresh oregano and reduce heat to low; cook until oregano is wilted, 2 or 3 more minutes.

            Mix red pepper flakes, dried oregano, and tomatoes into olive oil mixture. Bring sauce to a simmer and season with salt, sugar, and black pepper. Turn heat to low; simmer sauce until thickened and oil rises to the top, 35 to 40 minutes, stirring occasionally.
          </p>         
        </Typography>
        </Col>

      </Col>
    </Row>


  );
}


export default RecipeDetail;



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sample from '../docs/sample.jpg';


const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    height: 845, 
    margin: 45,
    marginTop: 40,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 50px 0 rgba(0, 0, 0, 0.19)'
  },
  media: {
    height: 550,
    weight: 250,
  }
});


const MatchingRecipes = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="center" spacing={2}>
        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia className={classes.media}
              component="img"
              alt="Shrimp and Chorizo Paella"
              height="140"
              image={sample}
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Shrimp and Chorizo Paella
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}
              component="img"
              alt="Shrimp and Chorizo Paella"
              height="140"
              image={sample}
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Shrimp and Chorizo Paella
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}
              component="img"
              alt="Shrimp and Chorizo Paella"
              height="140"
              image={sample}
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Shrimp and Chorizo Paella
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}
              component="img"
              alt="Shrimp and Chorizo Paella"
              height="140"
              image={sample}
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Shrimp and Chorizo Paella
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  )
}


export default MatchingRecipes;
import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import sample from '../docs/sample.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import location from '../docs/location.jpg'
import { textAlign } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  
  media: {
        width: 500,
        height: 500,
        marginTop: 30,
       
        
      },
  cont: {
   marginTop: 30,
   
  },

  title:{
    // marginTop: 110,
    fontSize: 65,
    margin: 20,
    marginLeft: 40
  
  },
  formatBox: {
    // width: "50%"
    marginTop: 30,
    // border: "black solid",
    height: 500,
    display: "flex",
    flexDirection: "row"
  },

  formatRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 40
  },
  text: {
    marginLeft: theme.spacing(8),
    // marginTop: theme.spacing(15),
    width: 600
  },
  paragraph: {
    fontSize: 25,
   width: 600,
    
  },
  link: {
    fontSize: 18,
    marginLeft: 25
    // marginLeft: theme.spacing(2),
  },
  location: {
    width: 800,
    height: 500,
    marginLeft: 120,
 
        
   
    
  },

  location2: {
    width: 800,
    height: 500,
   
    marginRight: 120
        
   
    
  },


  country: {

    padding: 50,
    fontSize: 50,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'pink'
  
  },

}));


function GlobeFeature() {
  const classes = useStyles();
  return (
    <div>

{/* Start */}

<h2 className={classes.country}>American</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             <h1 className={classes.title}>French</h1>
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>


{/* END */}


<h2 className={classes.country}>Chinese</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Greek</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Indian</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Italian</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Japanese</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Korean</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Mediterranean</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Mexican</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Spanish</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <h2 className={classes.country}>Turkish</h2>      
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
      </div>

      <div className={classes.formatRow}>

      <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.location2}
            image={location}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div classN
             ame={classes.text}>
             {/* <h1 className={classes.title}>French</h1> */}
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      
    </div>
  )
}

export default GlobeFeature;
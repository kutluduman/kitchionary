import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import sample from '../docs/sample.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


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
    flexDirection: "row"
  },
  text: {
    marginLeft: theme.spacing(8),
    // marginTop: theme.spacing(15),
    width: 600
  },
  paragraph: {
    fontSize: 20,
  },
  link: {
    fontSize: 18,
    // marginLeft: theme.spacing(2),
  }

}));


function GlobeFeature() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.formatRow}>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title="SAMPLE 1"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
             <div className={classes.text}>
             <h1 className={classes.title}>French</h1>
             <p className={classes.paragraph}>A croissant (UK: /ˈkrwʌsɒŋ/;[3] US: /krwɑːˈsɒ̃/, /krəˈsɒnt/; French pronunciation: [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie pastry of Austrian origin,[1] named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry.</p>
             <Button className={classes.link} href="#text-buttons" color="primary">
              Try making it here!
            </Button>
            </div>
          </Box> 
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
           <Box  className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title="SAMPLE 2"
          />
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
          <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title="SAMPLE 3"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
           <Box  className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]
JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
        <Col>
        <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title="SAMPLE 4"
          />
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
        <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title="SAMPLE 5"
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
           <Box  className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
        <Col>
        <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title='sample7'
          />
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
        <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title='sample8'
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
        <Col>
        <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title='sample11'
          />
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
        <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title='sample6'
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
           <Box className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
        <Col>
        <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title='sample10'
          />
        </Col>
      </div>
      <div className={classes.formatRow}>
        <Col>
        <CardMedia
          // INSERT RECIPE IMAGE
            className={classes.media}
            image={sample}
            title='sample9'
          />
        </Col>
        <Col>
           <Box className={classes.formatBox}>
           <p className={classes.paragraph}>JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

Douglas Crockford originally specified the JSON format in the early 2000s. JSON was first standardized in 2013, as ECMA-404.[7] RFC 8259, published in 2017, is the current version of the Internet Standard STD 90, and it remains consistent with ECMA-404.[8] That same year, JSON was also standardized as ISO/IEC 21778:2017.[1] The ECMA and ISO standards describe only the allowed syntax, whereas the RFC covers some security and interoperability considerations.[9]</p>
        </Box>
        </Col>
      </div>
    </div>
  )
}

export default GlobeFeature;
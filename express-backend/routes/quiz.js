const express = require('express');
const router = express.Router();


module.exports = (db) => {


  router.post("/", (req,res) => {

    db.query(``,[])
    .then((data) => {
      const values = data.rows;
      console.log('values', values);
      res.json({values});
    })
    .catch(err => {
      res.status(500).json({error: err.message});
    });

  })


  return router;

}

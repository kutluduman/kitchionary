const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/", (req,res) => {


    .then((data) => {

    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  return router;

};


const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/", (req,res) => {
    const ingredient = req.body.name;
    const amount = req.body.amount;
    const culture = req.body.culture;


    return db.query(`SELECT id, first_name, last_name, email, phone_number
    FROM users
    WHERE email = $1 AND password = $2;`,[email, password])
    .then((data) => {
        const user = data.rows[0];
        console.log('user', user);
        res.json({ user });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  return router;

};

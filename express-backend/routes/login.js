const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  router.post("/", (req,res) => {
    const email = req.body.user.email;
    const password = req.body.user.password;

    return db.query(`SELECT id, first_name, last_name, email, phone_number
    FROM users
    WHERE email = $1 AND password = $2;`,[email, password])
    .then((data) => {
      if (data.rows.length === 0) {
        res.status(401).send("Incorrect Email or Password");
      } else {
        const user = data.rows[0];
        console.log('user', user);
        res.json({ user });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  return router;

};

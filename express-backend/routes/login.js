const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/login", (req,res) => {
    const values = [];
    for(key in req.body) {
      values.push(req.body[key]);
    }
    db.query(`SELECT id, first_name, last_name, email, phone_number
    FROM users
    WHERE email = $1 AND password = $2;`,values)
    .then((data) => {
      user = data.rows[0];
      console.log(user);
      res.json({ user });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  return router;

};

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  const emailExist = function(email) {
    return db.query(`
    SELECT *
    FROM users
    WHERE email = $1;
    `, [email])
    .then(res => res.rows[0])
  };

  router.post("/", (req, res) => {
    const user = req.body;
    const first_name = user.first_name;
    const last_name = user.last_name;
    const email = user.email;
    const password = user.password;
    const phone_number = user.phone_number;
    return db.query(`
    INSERT INTO users (first_name, last_name, email, password, phone_number)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `, [first_name, last_name, email, password, phone_number])
    .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

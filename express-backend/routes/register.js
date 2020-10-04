const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// This route is used for user's register purpose

module.exports = (db) => {

  router.post("/", (req, res) => {
    const user = req.body;
    const first_name = user.first_name;
    const last_name = user.last_name;
    const email = user.email;
    const password = bcrypt.hashSync(user.password, 10);
    const phone_number = user.phone_number;

    return db.query(`
    SELECT *
    FROM users
    WHERE email = $1;
    `, [email])
      .then((data) => {
        if (data.rows.length > 0) {
          res.status(401).send("Email already exists")
        } else {
          db.query(`
        INSERT INTO users (first_name, last_name, email, password, phone_number)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
        `, [first_name, last_name, email, password, phone_number])
            .then(data => {
              const users = data.rows;
              res.json({
                users
              });
            })
            .catch(err => {
              res
                .status(500)
                .json({
                  error: err.message
                });
            });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({
            error: err.message
          });
      })
  });
  return router;
};

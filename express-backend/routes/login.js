const express = require('express');
const router  = express.Router();

module.exports = (db) => {


  const emailExist = function (email) {
    return db
      .query(
        `
    SELECT *
    FROM users
    WHERE email = $1;
    `,
        [email]
      )
      .then((res) => res.rows[0]);
  };


  router.post("/", (req, res) => {
    const email = req.body.email;
    emailExist(email).then((user) => console.log(user));
    return emailExist(email)
      .then((user) => {
        if (user) {
          if (req.body.password === user.password) {
            req.session.email = user.email;
            req.session.name = user.id;
            res.redirect("/home");
          } else {
            let templateVars = { errMessage: "Incorrect Password!" };
            res.render("errors_msg", templateVars);
          }
        } else {
          let templateVars = { errMessage: "Email does not exist!" };
          res.render("errors_msg", templateVars);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};

const express = require('express');
const router = express.Router();

// This route shows all the recipes that user created

module.exports = (db) => {

  router.post("/", (req, res) => {
    const email = req.body.name

    return db.query(`SELECT DISTINCT user_id, recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM recipes
    FULL JOIN users ON users.id = user_id
    WHERE users.email = $1`, [email])
      .then((data) => {
        const recipes = data.rows;
        res.json({
          recipes
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message
        });
      });
  });

  return router;

};

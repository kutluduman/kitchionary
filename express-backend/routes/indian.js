const express = require('express');
const router = express.Router();

// This route is for getting Indian cuisine recipes

module.exports = (db) => {

  router.post("/", (req, res) => {

    return db.query(`SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM recipes
    FULL JOIN cultures ON recipes.id = recipe_id
    WHERE cultures.name = 'Indian'`)
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

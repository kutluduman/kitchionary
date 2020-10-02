const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req,res) => {
    return db.query(`SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM recipes
    LIMIT 6;
    `)
    .then((data) => {
      console.log("DATA", data);
      const recipes = data.rows;
      console.log("RECIPES", recipes);
      res.json({ recipes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  })

  return router;

};

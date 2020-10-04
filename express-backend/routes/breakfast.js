const express = require('express');
const router = express.Router();

// This route is for getting the breakfast recipes

module.exports = (db) => {

  router.post("/", (req, res) => {
    const category = req.body.category;

    return db.query(`SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM ingredients
    FULL JOIN measurements ON ingredients.id = ingredient_id
    FULL JOIN recipes ON recipes.id = recipe_id
    WHERE recipes.is_${category} = true;`)
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

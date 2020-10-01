const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/", (req,res) => {
    console.log('REQQ', req.body)
    const category = req.body.category;
    console.log("req cat", category)

    // const name = req.body.recipe;

    return db.query(`SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM ingredients
    FULL JOIN measurements ON ingredients.id = ingredient_id
    FULL JOIN recipes ON recipes.id = recipe_id
    WHERE recipes.is_${category} = true;`)
    .then((data) => {
        const recipes = data.rows;
        console.log('user', recipes);
        res.json({ recipes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  return router;

};

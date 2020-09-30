const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log("reqqq", req.body);
    const recipes = req.body.recipes;
    const breakfast = recipes.breakfast;
    const lunch = recipes.lunch;
    const appetizer = recipes.appetizer;
    const dinner = recipes.dinner;
    const dessert = recipes.dessert;
    const glutenFree = recipes.glutenFree;
    const nutFree = recipes.nutFree;
    const dairyFree = recipes.dairyFree;
    const vegetarian = recipes.vegetarian;
    const vegan = recipes.vegan;
    const name = recipes.name;

    let queryString = `SELECT recipes.name
    FROM ingredients
    FULL JOIN measurements ON ingredients.id = ingredient_id
    FULL JOIN recipes ON recipes.id = recipe_id
    WHERE ingredients.name = '${name}'
    `;

    if (breakfast) {
      queryString += ` AND recipes.is_breakfast = ${breakfast}`;
    }

    if (lunch) {
      queryString += ` AND recipes.is_lunch = ${lunch}`;
    }
    if (appetizer) {
      queryString += ` AND recipes.is_appetizer = ${appetizer}`;
    }

    if (dinner) {
      queryString += ` AND recipes.is_dinner = ${dinner}`;
    }

    if (dessert) {
      queryString += ` AND recipes.is_dessert = ${dessert}`;
    }

    if (glutenFree) {
      queryString += ` AND recipes.is_gluten_free = ${glutenFree}`;
    }

    if (nutFree) {
      queryString += ` AND recipes.is_nut_free = ${nutFree}`;
    }

    if (dairyFree) {
      queryString += ` AND recipes.is_dairy_free= ${dairyFree}`;
    }

    if (vegetarian) {
      queryString += ` AND recipes.is_vegetarian = ${vegetarian}`;
    }

    if (vegan) {
      queryString += ` AND recipes.is_vegan = ${vegan}`;
    }

    queryString += `;`;


    return db
      .query(queryString)
      .then((data) => {
        console.log("data", data);
        const recipes = data.rows;
        console.log("recipes", recipes);
        res.json({ recipes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};

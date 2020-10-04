const express = require("express");
const router = express.Router();

// This route is used to display the recipe

module.exports = (db) => {
  router.get("/", (req, res) => {
    return db
      .query(
        `SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM recipes
    LIMIT 6;
    `
      )
      .then((data) => {
        const recipes = data.rows;

        res.json({ recipes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:id", (req, res) => {
    const name = req.body.recipe;

    return db
      .query(
        `SELECT DISTINCT recipes.id, ingredients.name AS ingredient, measurements.amount, measurements.unit, users.first_name, users.last_name, recipes.directions_one, recipes.directions_two, recipes.directions_three, recipes.directions_four, recipes.directions_five, recipes.directions_six,recipes.name, recipes.description, recipes.img_url, recipes.time, recipes.is_gluten_free, recipes.is_dairy_free, recipes.is_vegan, recipes.is_vegetarian, recipes.is_nut_free
    FROM ingredients
    JOIN measurements ON ingredients.id = ingredient_id
    JOIN recipes ON recipes.id = recipe_id
    JOIN users ON users.id = user_id
    WHERE recipes.name = $1;`,
        [name]
      )

      .then((data) => {
        const info = data.rows;

        res.json({ info });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
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
    const ingredient_one = recipes.ingredient_one;
    const ingredient_two = recipes.ingredient_two;
    const ingredient_three = recipes.ingredient_three;

    const queryParams = [];

    let queryString = `SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM ingredients
    FULL JOIN measurements ON ingredients.id = ingredient_id
    FULL JOIN recipes ON recipes.id = recipe_id
    `;

    if (ingredient_one && ingredient_two && ingredient_three) {
      queryParams.push(ingredient_one);
      queryParams.push(ingredient_two);
      queryParams.push(ingredient_three);
      queryString += `WHERE ingredients.name IN ('${ingredient_one}', '${ingredient_two}', '${ingredient_three}')`;
    } else if (ingredient_one && ingredient_two) {
      queryParams.push(ingredient_one);
      queryParams.push(ingredient_two);
      queryString += `WHERE ingredients.name IN ('${ingredient_one}', '${ingredient_two}')`;
    } else {
      if (ingredient_one) {
        queryParams.push(ingredient_one);
        queryString += `WHERE ingredients.name = '${ingredient_one}'`;
      }
    }

    if (breakfast) {
      queryParams.push(breakfast);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_breakfast = ${breakfast}`;
      } else {
        queryString += `WHERE recipes.is_breakfast = ${breakfast}`;
      }
    }

    if (lunch) {
      queryParams.push(lunch);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_lunch = ${lunch}`;
      } else {
        queryString += `WHERE recipes.is_lunch = ${lunch}`;
      }
    }

    if (appetizer) {
      queryParams.push(appetizer);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_appetizer = ${appetizer}`;
      } else {
        queryString += `WHERE recipes.is_appetizer = ${appetizer}`;
      }
    }

    if (dinner) {
      queryParams.push(dinner);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_dinner = ${dinner}`;
      } else {
        queryString += `WHERE recipes.is_dinner = ${dinner}`;
      }
    }

    if (dessert) {
      queryParams.push(dessert);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_dessert = ${dessert}`;
      } else {
        queryString += `WHERE recipes.is_dessert = ${dessert}`;
      }
    }

    if (glutenFree) {
      queryParams.push(glutenFree);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_gluten_free = ${glutenFree}`;
      } else {
        queryString += `WHERE recipes.is_gluten_free = ${glutenFree}`;
      }
    }

    if (nutFree) {
      queryParams.push(nutFree);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_nut_free = ${nutFree}`;
      } else {
        queryString += `WHERE recipes.is_nut_free = ${nutFree}`;
      }
    }

    if (dairyFree) {
      queryParams.push(dairyFree);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_dairy_free= ${dairyFree}`;
      } else {
        queryString += `WHERE recipes.is_dairy_free = ${dairyFree}`;
      }
    }

    if (vegetarian) {
      queryParams.push(vegetarian);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_vegetarian = ${vegetarian}`;
      } else {
        queryString += `WHERE recipes.is_vegetarian = ${vegetarian}`;
      }
    }

    if (vegan) {
      queryParams.push(vegan);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_vegan = ${vegan}`;
      } else {
        queryString += `WHERE recipes.is_vegan = ${vegan}`;
      }
    }

    queryString += `;`;

    return db
      .query(queryString)
      .then((data) => {
        const recipes = data.rows;

        res.json({ recipes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};

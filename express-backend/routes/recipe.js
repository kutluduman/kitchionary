const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.post('/:id', (req,res) => {
    // console.log('req', req.body)
    const name = req.body.recipe;

    return db.query(`SELECT DISTINCT ingredients.name, measurements.amount, measurements.unit, users.first_name, users.last_name, recipes.directions
    FROM ingredients
    JOIN measurements ON ingredients.id = ingredient_id
    JOIN recipes ON recipes.id = recipe_id
    JOIN users ON users.id = user_id
    WHERE recipes.name = $1;`,[name])

    .then((data) => {
      // console.log('data', data.rows)
        const info = data.rows;
        console.log('everything', info);
        res.json({ info });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });

  })


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

    const queryParams = [];

    let queryString = `SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM ingredients
    FULL JOIN measurements ON ingredients.id = ingredient_id
    FULL JOIN recipes ON recipes.id = recipe_id
    `;

    if (name) {
      queryParams.push(name);
      queryString += `WHERE ingredients.name = '${name}'`;
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
    console.log("QUERY", queryString)


    return db
      .query(queryString)
      .then((data) => {
        console.log("DATA", data);
        const recipes = data.rows;
        console.log("RECIPES", recipes);
        res.json({ recipes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });


  return router;

};

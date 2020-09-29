const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/", (req,res) => {
    console.log("reqqq", req.body);
    const recipes = req.body.recipes
    const breakfast = recipes.breakfast;
    const lunch = recipes.lunch;
    const appetizer = recipes.appetizer;
    const dinner = recipes.dinner;
    const dessert = recipes.dessert;
    const glutenFree = recipes.glutenFree;
    const nutFree = recipes.nutFree;
    const dairyFree = recipes.dairyFree;
    const vegetarian = recipes.vegetarian;
    const vegan = recipes.vegan
    const name = recipes.name;


    console.log('breakfast', breakfast);
    console.log('lunch', lunch);
    console.log('appetizer', appetizer);
    console.log('dinner', dinner);
    console.log('dessert', dessert);
    console.log('glutenfree', glutenFree);
    console.log('nutfree', nutFree);
    console.log('dairyfree', dairyFree);
    console.log('vegetarian', vegetarian);
    console.log('vegan', vegan);
    console.log('name', name);

    const queryParams = [];

    let queryString = `SELECT recipes.name
    FROM ingredients
    FULL JOIN measurements ON ingredients.id = ingredient_id
    FULL JOIN recipes ON recipes.id = recipe_id
    WHERE
    `;

    if (breakfast) {
      queryParams.push(breakfast);
      queryString += ` ingredients.name = ${breakfast}`;
    }

    if (lunch) {
      queryParams.push(lunch);
      if (queryParams.length !== 0) {
        queryString += `AND recipes.is_lunch = ${lunch}`
      } else {
        queryString += ` recipes.is_lunch = ${lunch}`;
      }
    }
    if (appetizer) {
      queryParams.push(appetizer);
      if (queryParams.length !== 0) {
          queryString += `AND recipes.is_appetizer = ${appetizer}`
      } else {
        queryString += ` recipes.is_appetizer = ${appetizer}`;
      }

    }
    if (dinner) {
      queryParams.push(dinner);
      if (queryParams.length !== 0) {
        queryString += `AND recipes.is_dinner = ${dinner}`
      } else {
        queryString += ` recipes.is_dinner = ${dinner}`;
      }

    }
    if (dessert){
      queryParams.push(dessert);
      if (queryParams.length !== 0) {
        queryString += `AND recipes.is_dessert = ${dessert}`
      } else {
        queryString += ` recipes.is_dessert = ${dessert}`;
      }

    }
    if (glutenFree){
      queryParams.push(glutenFree);
      if (queryParams.length !== 0) {
        queryString += `AND recipes.is_gluten_free = ${glutenFree}`
      } else {
        queryString += ` recipes.is_gluten_free = ${glutenFree}`;
      }

    }
    if (nutFree){
      queryParams.push(nutFree);
      if (queryParams.length !== 0) {
          queryString += `AND recipes.is_nut_free = ${nutFree}`
      } else {
        queryString += ` recipes.is_nut_free = ${nutFree}`;
      }

    }
    if (dairyFree){
      queryParams.push(dairyFree);
      if (queryParams.length !== 0) {
          queryString += `AND recipes.is_dairy_free= ${dairyFree}`
      } else {
        queryString += ` recipes.is_dairy_free = ${dairyFree}`;
      }

    }
    if (vegetarian){
      queryParams.push(vegetarian);
      if (queryParams.length !== 0) {
        queryString += `AND recipes.is_vegetarian = ${vegetarian}`
      } else {
        queryString += ` recipes.is_vegetarian = ${vegetarian}`;
      }

    }
    if (vegan) {
      queryParams.push(vegan);
      if (queryParams.length !== 0) {
        queryString += `AND recipes.is_vegan = ${vegan}`
      } else {
        queryString += ` recipes.is_vegan = ${vegan}`;
      }
    }

    `
    WHERE ingredients.name = $1
    AND recipes.is_breakfast = $2
    AND recipes.is_lunch = $3
    AND recipes.is_appetizer = $4
    AND recipes.is_dinner = $5
    AND recipes.is_dessert = $6
    AND recipes.is_gluten_free= $7
    AND recipes.is_nut_free = $8
    AND recipes.is_dairy_free = $9
    AND recipes.is_vegetarian = $10
    AND recipes.is_vegan = $11;`,[name, breakfast, lunch, appetizer, dinner, dessert, glutenFree, nutFree, dairyFree, vegetarian, vegan])


    .then((data) => {
      console.log('data', data)
        const recipes = data.rows[0];
        console.log('recipes', recipes);
        res.json({ user });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });


  return router;

};

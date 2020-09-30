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
    WHERE ingredients.name = '${name}'
    `;

    if (breakfast) {
      queryParams.push(breakfast);
      queryString += ` AND recipes.is_breakfast = ${breakfast}`;
    }

    if (lunch) {
      queryParams.push(lunch);
      if (queryParams.length !== 0) {
        queryString += ` AND recipes.is_lunch = ${lunch}`
      } else {
        queryString += ` recipes.is_lunch = ${lunch}`;
      }
    }
    if (appetizer) {
      queryParams.push(appetizer);
      if (queryParams.length !== 0) {
          queryString += ` AND recipes.is_appetizer = ${appetizer}`
      } else {
        queryString += ` recipes.is_appetizer = ${appetizer}`;
      }

    }
    if (dinner) {
      queryParams.push(dinner);
      if (queryParams.length !== 0) {
        queryString += ` AND recipes.is_dinner = ${dinner}`
      } else {
        queryString += ` recipes.is_dinner = ${dinner}`;
      }

    }
    if (dessert){
      queryParams.push(dessert);

      if (queryParams.length !== 0) {
        queryString += ` AND recipes.is_dessert = ${dessert}`
      } else {
        queryString += ` recipes.is_dessert = ${dessert}`;
       }

    }
    if (glutenFree){
      queryParams.push(glutenFree);
      if (queryParams.length !== 0) {
        queryString += ` AND recipes.is_gluten_free = ${glutenFree}`
      } else {
        queryString += ` recipes.is_gluten_free = ${glutenFree}`;
      }

    }
    if (nutFree){
      queryParams.push(nutFree);
      if (queryParams.length !== 0) {
          queryString += ` AND recipes.is_nut_free = ${nutFree}`
      } else {
        queryString += ` recipes.is_nut_free = ${nutFree}`;
      }

    }
    if (dairyFree){
      queryParams.push(dairyFree);
      if (queryParams.length !== 0) {
          queryString += ` AND recipes.is_dairy_free= ${dairyFree}`
      } else {
        queryString += ` recipes.is_dairy_free = ${dairyFree}`;
      }

    }
    if (vegetarian){
      queryParams.push(vegetarian);
      if (queryParams.length !== 0) {
        queryString += ` AND recipes.is_vegetarian = ${vegetarian}`
      } else {
        queryString += ` recipes.is_vegetarian = ${vegetarian}`;
      }

    }
    if (vegan) {
      queryParams.push(vegan);
      if (queryParams.length !== 0) {
        queryString += ` AND recipes.is_vegan = ${vegan}`
      } else {
        queryString += ` recipes.is_vegan = ${vegan}`;
      }
    }

    queryString += `;`


    console.log(queryString)
    return db.query(queryString, queryParams)
    .then((data) => {
      console.log('data', data)
        const recipes = data.rows;
        console.log('recipes', recipes);
        res.json({ recipes });
        console.log('no recipeeeeeeee')
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });


  return router;

};

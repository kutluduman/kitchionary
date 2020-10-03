const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.post('/', (req,res) => {
    console.log('req', req.body)
    const user = req.body.user.name;
    // const name = req.body.name;
    const name = req.body.name;
    const img_url = req.body.img_url;
    // const description = 'yum';
    const description = req.body.description;
    const directions_one = req.body.directions_one;
    const directions_two = req.body.directions_two;
    const directions_three = req.body.directions_three;
    const directions_four = req.body.directions_four;
    const directions_five = req.body.directions_five;
    const directions_six = req.body.directions_six;
    const ingredients = req.body.ingredients;
    // const ingredients_one = req.body.ingredients_one;
    // const ingredients_two = req.body.ingredients_two;
    // const ingredients_three = req.body.ingredients_three;
    // const ingredients_four = req.body.ingredients_four;
    // const ingredients_five = req.body.ingredients_five;
    // const amount = [1, 2]
    const amount = req.body.amount;
    // const amount_one = req.body.amount_one;
    // const amount_two = req.body.amount_two;
    // const amount_three = req.body.amount_three;
    // const amount_four = req.body.amount_four;
    // const amount_five = req.body.amount_five;
    const unit = req.body.unit;
    // const unit_one = req.body.unit_one;
    // const unit_two = req.body.unit_two;
    // const unit_three = req.body.unit_three;
    // const unit_four = req.body.unit_four;
    // const unit_five = req.body.unit_five;
    const breakfast = req.body.breakfast;
    const lunch = req.body.lunch;
    const appetizer = req.body.appetizer;
    const dinner = req.body.dinner;
    const dessert = req.body.dessert;
    const glutenFree = req.body.glutenFree
    const nutFree = req.body.nutFree;
    const dairyFree = req.body.dairyFree;
    const vegetarian = req.body.vegetarian;
    const vegan = req.body.vegan;
    const isSalty = req.body.isSalty;
    const isGreasy = req.body.isGreasy;
    const isSpicy = req.body.isSpicy;
    const isSweet = req.body.isSweet;
    const isFruity = req.body.isFruity;
    const isHealthy = req.body.isHealthy;
    const isCold = req.body.isCold;
    const isHot = req.body.isHot;
    // const time = 30;
    const time = req.body.time;

    console.log("before queries", ingredients)

    return db.query(`SELECT id
    FROM users
    WHERE email = $1;`, [user])
    .then((data) => {
        const user_id = data.rows[0].id;
        console.log('user', user_id);

        return db.query(`INSERT INTO recipes (user_id, name, description, directions_one, directions_two, directions_three, directions_four, directions_five, directions_six, img_url, time, is_gluten_free, is_dairy_free, is_vegan, is_vegetarian, is_nut_free, is_salty, is_greasy, is_sweet, is_fruity, is_healthy, is_spicy, is_hot, is_cold, is_breakfast, is_lunch, is_appetizer, is_dinner, is_dessert)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)
        RETURNING *;
        `, [user_id, name, description, directions_one, directions_two, directions_three, directions_four, directions_five, directions_six, img_url, time, glutenFree, dairyFree, vegan, vegetarian, nutFree, isSalty, isGreasy, isSweet, isFruity, isHealthy, isSpicy, isHot, isCold, breakfast, lunch, appetizer, dinner, dessert])
          .then(data => {
              const recipe_id = data.rows[0].id;
              for(let index in ingredients) {
                const eachIngredient = ingredients[index];
                console.log("eachIngredient", eachIngredient);
               return db.query(`SELECT id FROM ingredients WHERE name = $1;`, [eachIngredient])
               .then(ingredientIdData => {
                 console.log('ingredientID rows', ingredientIdData.rows[0]);
                 console.log('ingredientIDRows', ingredientIdData.rows[0].id);
                 if (ingredientIdData.rows.length === 0) {
                   return db.query(`INSERT INTO ingredients (name) VALUES ($1) RETURNING *;`,[eachIngredient])
                   .then(ingredientId => {
                    //  console.log('ingredient id', ingredientId.rows);
                    //  console.log('ingredient id with rows', ingredientId.rows[0]);
                     console.log("amount element", amount[index]);
                     console.log('unit element', unit[index][index]);
                     return db.query(`INSERT INTO measurements (ingredient_id,recipe_id,amount,unit) VALUES($1,$2,$3,$4) RETURNING *;`, [ingredientId.rows[0].id, recipe_id, amount[index], unit[index][index]])
                     .then (measurement => {
                       console.log("measurement", measurement.rows);
                     })
                   })
                 } else {
                  return db.query(`INSERT INTO measurements (ingredient_id,recipe_id,amount,unit) VALUES($1,$2,$3,$4) RETURNING *;`, [ingredientIdData.rows[0].id, recipe_id, amount[index], unit[index][index]])
                  .then (measurements => {
                    console.log("measurementsssss", measurements.rows);
                    const recipes = { name, description, img_url }
                    res.json({ recipes });
                  })
                 }
               })
              }

            })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });


    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });



  })

  return router;

};

// return db.query(`INSERT INTO recipes (user_id, name, description, directions_one, directions_two, directions_three, directions_four, directions_five, directions_six, img_url, time, is_gluten_free, is_dairy_free, is_vegan, is_vegetarian, is_nut_free, is_salty, is_greasy, is_sweet, is_fruity, is_healthy, is_spicy, is_hot, is_cold, is_breakfast, is_lunch, is_appetizer, is_dinner, is_dessert)
// VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, %26, $27, $28, $29)
// RETURNING *;
// `, [user_id, name, description, directions_one, directions_two, directions_three, directions_four, directions_five, directions_six, img_url, time, glutenFree, dairyFree, vegan, vegetarian, nutFree, isSalty, isGreasy, isSweet, isFruity, isHealthy, isSpicy, isHot, isCold, breakfast, lunch, appetizer, dinner, dessert])
//   .then(data => {
//       const recipe = data.rows;
//       res.json({ users });
//     })
//   .catch(err => {
//     res
//       .status(500)
//       .json({ error: err.message });
//   });

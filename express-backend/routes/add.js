const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post('/', (req,res) => {
    console.log('req', req.body)
    const user = req.body.user.name;
    const name = req.body.name;
    const img_url = req.body.img_url;
    const description = req.body.description;
    const directions_one = req.body.directions_one;
    const directions_two = req.body.directions_two;
    const directions_three = req.body.directions_three;
    const directions_four = req.body.directions_four;
    const directions_five = req.body.directions_five;
    const directions_six = req.body.directions_six;
    const ingredients = req.body.ingredients;
    const amount = req.body.amount;
    const unit = req.body.unit;
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
    const time = req.body.time;

    console.log("is something wrong with ingredients", ingredients)

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
            console.log("data after second query", data.rows);
              const recipe_id = data.rows[0].id;
              for(let index in ingredients) {
                const eachIngredient = ingredients[index];
                console.log("eachIngredient", eachIngredient);
               db.query(`SELECT id FROM ingredients WHERE name = $1;`, [eachIngredient])
               .then(ingredientIdData => {
                 console.log('ingredientID rows', ingredientIdData.rows);
                //  console.log('ingredientIDRows', ingredientIdData.rows[0].id);
                 if (ingredientIdData.rows.length === 0) {
                   db.query(`INSERT INTO ingredients (name) VALUES ($1) RETURNING *;`,[eachIngredient])
                   .then(ingredientId => {
                    //  console.log('ingredient id', ingredientId.rows);
                    //  console.log('ingredient id with rows', ingredientId.rows[0]);
                    console.log('length', unit.length)
                    if (unit.length > 0) {
                     console.log("amount element", amount[index]);
                    //  console.log('unit element', unit[index][index]);
                     db.query(`INSERT INTO measurements (ingredient_id,recipe_id,amount,unit) VALUES($1,$2,$3,$4) RETURNING *;`, [ingredientId.rows[0].id, recipe_id, amount[index], unit[index][index]])
                     .then (measurement => {
                       console.log("measurement", measurement.rows);
                       const recipes = { name, description, img_url }
                      //  res.json({ recipes });
                       res.json({ name, description, img_url }).status(200);
                     })
                     .catch(err => {
                      res
                        .status(500)
                        // .json({ error: err.message });
                    });
                    } else {
                      console.log("if no unit")
                      db.query(`INSERT INTO measurements (ingredient_id,recipe_id,amount) VALUES($1,$2,$3) RETURNING *;`, [ingredientId.rows[0].id, recipe_id, amount[index]])
                      .then (measurement => {
                        console.log("measurement", measurement.rows);
                        const recipes = { name, description, img_url }
                        //  res.json({ recipes });
                        res.json({ name, description, img_url }).status(200);
                      })
                      .catch(err => {
                        res
                          .status(500)
                          // .json({ error: err.message });
                      });
                    }
                   })
                   .catch(err => {
                    res
                      .status(500)
                      // .json({ error: err.message });
                  });
                 } else {
                  if (unit.length > 0) {
                    console.log("amount element", amount[index]);
                   //  console.log('unit element', unit[index][index]);
                    db.query(`INSERT INTO measurements (ingredient_id,recipe_id,amount,unit) VALUES($1,$2,$3,$4) RETURNING *;`, [ingredientIdData.rows[0].id, recipe_id, amount[index], unit[index][index]])
                    .then (measurement => {
                      console.log("measurement", measurement.rows);
                      const recipes = { name, description, img_url }
                     //  res.json({ recipes });
                      res.json({ name, description, img_url }).status(200);
                    })
                    .catch(err => {
                     res
                       .status(500)
                       // .json({ error: err.message });
                   });
                   } else {
                     console.log("if no unit")
                     db.query(`INSERT INTO measurements (ingredient_id,recipe_id,amount) VALUES($1,$2,$3) RETURNING *;`, [ingredientIdData.rows[0].id, recipe_id, amount[index]])
                     .then (measurement => {
                       console.log("measurement", measurement.rows);
                       const recipes = { name, description, img_url }
                       //  res.json({ recipes });
                       res.json({ name, description, img_url }).status(200);
                     })
                     .catch(err => {
                       res
                         .status(500)
                         // .json({ error: err.message });
                     });
                   }
                 }
               })
               .catch((err) => {
                res.status(500)
                // .json({ error: err.message });
              });
              }

            })
          .catch(err => {
            res
              .status(500)
              // .json({ error: err.message });
          })
          .catch((err) => {
            res.status(500)
            // .json({ error: err.message });
          });
    })
    .catch((err) => {
      res.status(500)
      // .json({ error: err.message });
    });
  })

  return router;
};

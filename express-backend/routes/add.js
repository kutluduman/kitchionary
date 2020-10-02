const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.post('/', (req,res) => {
    console.log('req', req.body)
    const user_id = req.body.user_id
    const name = req.body.name;
    const img_url = req.body.img_url;
    const description = req.body.description;
    const directions_one = req.body.directions_one;
    const directions_two = req.body.directions_two;
    const directions_three = req.body.directions_three;
    const directions_four = req.body.directions_four;
    const directions_five = req.body.directions_five;
    const directions_six = req.body.directions_six;
    const ingredients_one = req.body.ingredients_one;
    const ingredients_two = req.body.ingredients_two;
    const ingredients_three = req.body.ingredients_three;
    const ingredients_four = req.body.ingredients_four;
    const ingredients_five = req.body.ingredients_five;
    const breakfast = req.body.breakfast;
    const lunch = req.body.lunch;
    const appetizer = req.body.appetizer;
    const dinner = rerq.body.dinner;
    const dessert = req.body.dessert;
    const glutenFree = req.body.glutenFree
    const nutFree = rerq.body.nutFree;
    const dairyFree = req.body.dairyFree;
    const vegetarian = req.body.vegetarian;
    const vegan = req.body.vegan;
    const isSalty = req.body.isSalty;
    const isGreasy = req.body.isGreasy;
    const isSpicy = req.body.isSpicy;
    const isSweet = req.body.isSweet;
    const isFruity = req.body.isFruity;
    const isHealthy = req.body.isHealthy;
    const isCold = rerq.body.isCold;
    const isHot = req.body.isHot;
    const time = req.body.time;

    return db.query(`INSERT INTO recipes (user_id, name, description, directions_one, directions_two, directions_three, directions_four, directions_five, directions_six, img_url, time, is_gluten_free, is_dairy_free, is_vegan, is_vegetarian, is_nut_free, is_salty, is_greasy, is_sweet, is_fruity, is_healthy, is_spicy, is_hot, is_cold, is_breakfast, is_lunch, is_appetizer, is_dinner, is_dessert)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, %26, $27, $28, $29)
    RETURNING *;
    `, [user_id, name, description, directions_one, directions_two, directions_three, directions_four, directions_five, directions_six, img_url, time, glutenFree, dairyFree, vegan, vegetarian, nutFree, isSalty, isGreasy, isSweet, isFruity, isHealthy, isSpicy, isHot, isCold, breakfast, lunch, appetizer, dinner, dessert])
      .then(data => {
          const users = data.rows;
          res.json({ users });
        })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })

  return router;

};


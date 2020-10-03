const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log('rq.body', req.body)

    const recipe_id = req.body.recipe_id;

    return db
      .query(
        `SELECT ROUND(AVG(rating),0)
        FROM reviews
        WHERE recipe_id = ${recipe_id};`
      )
      .then((data) => {
        const rating = data.rows;
        console.log("rating", rating);
        res.json({ rating });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/new", (req,res) => {

    const rating = req.body.rating;
    const user_id = req.body.user_id;
    const recipe_id = req.body.recipe_id;

    return db
      .query(
        `INSERT INTO reviews (rating,user_id,recipe_id)
        VALUES ($1,$2,$3)
        RETURNING *;
        `,[rating,user_id,recipe_id]
      )
      .then(data => {
        const rating = data.rows;
        res.json({rating})
      })
      .catch(err => {
        res.status(500)
        .json({error:err.message});
      })

  })

  return router;
};

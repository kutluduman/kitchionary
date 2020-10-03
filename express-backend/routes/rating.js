const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

    const recipe_id = req.body.recipe_id;

    return db
      .query(
        `SELECT AVG(rating)
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

  router.post("/", (req,res) => {

    const rating = req.body.rating;

    return db
      .query(
        `INSERT INTO reviews (rating)
        VALUES ($1)
        RETURNING *;
        `,[rating]
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

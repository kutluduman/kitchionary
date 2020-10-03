const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    return db
      .query(
        `SELECT AVG(rating)
        FROM reviews
        WHERE recipe_id = 1;`
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

  return router;
};

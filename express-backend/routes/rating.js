const express = require("express");
const router = express.Router();

// This route is used to display the ratings for the recipes

module.exports = (db) => {
  router.post("/", (req, res) => {
    const recipe_id = req.body.recipe_id;

    return db
      .query(
        `SELECT ROUND(AVG(rating),0)
        FROM reviews
        WHERE recipe_id = ${recipe_id};`
      )
      .then((data) => {
        const rating = data.rows;
        res.json({
          rating
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message
        });
      });
  });

  router.post("/new", (req, res) => {
    const rating = req.body.rating.rating;
    const email = req.body.rating.user_id.name;
    const recipe_id = req.body.rating.recipe_id;

    return db.query(`SELECT id
    FROM users
    WHERE email = $1;`, [email])
      .then((data) => {
        const user_id = data.rows[0].id;
        db.query(`SELECT *
    FROM reviews
    WHERE user_id = $1 AND recipe_id = $2;`, [user_id, recipe_id])
          .then((data) => {
            if (data.rows.length === 0) {
              db.query(`INSERT INTO reviews (user_id, recipe_id, rating)
        VALUES ($1, $2, $3)
        RETURNING *;`, [user_id, recipe_id, rating])
                .then((data) => {
                  const rating = data.rows;
                  res.json({
                    rating
                  });
                })
                .catch((err) => {
                  res.status(500).json({
                    error: err.message
                  });
                });
            } else {
              db.query(`
        UPDATE reviews
        SET rating = $1
        WHERE user_id = $2 AND recipe_id = $3
        RETURNING *;`, [rating, user_id, recipe_id])
                .then((data) => {
                  const rating = data.rows;
                  res.json({
                    rating
                  });
                })
                .catch((err) => {
                  res.status(500).json({
                    error: err.message
                  });
                });
            }
          })
          .catch((err) => {
            res.status(500).json({
              error: err.message
            });
          });
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message
        });
      });
  })

  return router;
};

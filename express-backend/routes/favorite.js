const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req,res) => {
    const email = req.body.name

    return db.query(`SELECT DISTINCT users.id, recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM favourites
    FULL JOIN users ON users.id = user_id
    FULL JOIN recipes ON recipes.id = recipe_id
    WHERE users.email = $1 AND is_favourite = true;`, [email])
    .then((data) => {
        const favourites = data.rows;
        console.log('fav', favourites);
        res.json({ favourites });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });


  router.post('/:id', (req,res) => {
    console.log("req for fav", req.body)
    const is_favourite = req.body.favourite.is_favourite;
    const recipe_id = req.body.favourite.recipe_id
    const email = req.body.favourite.user_id.name

    return db.query(`SELECT id
    FROM users
    WHERE email = $1;`, [email])
    .then((data) => {
      const user_id = data.rows[0].id;
      console.log('user', user_id);
      db.query(`SELECT *
      FROM favourites
      WHERE user_id = $1 AND recipe_id = $2;`, [user_id, recipe_id])
      .then((data) => {
        if (data.rows.length === 0) {
          db.query(`
          INSERT INTO favourites (user_id, recipe_id, is_favourite)
          VALUES ($1, $2, $3)
          RETURNING *;`, [user_id, recipe_id, is_favourite])
          .then((data) => {
            const favourited = data.rows;
            console.log('fav', favourited);
            res.json({ favourited });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
        } else {
          db.query(`
          UPDATE favourites
          SET is_favourite = $1
          WHERE user_id = $2 AND recipe_id = $3
          RETURNING *;`, [is_favourite, user_id, recipe_id])
          .then((data) => {
            const favourited = data.rows;
            console.log('fav', favourited);
            res.json({ favourited });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
        }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  })
  .catch((err) => {
    res.status(500).json({ error: err.message });
  });

    return db.query(`SELECT DISTINCT users.id, recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM favourites
    FULL JOIN users ON users.id = user_id
    FULL JOIN recipes ON recipes.id = recipe_id
    WHERE users.email = $1 AND is_favourite = true;`, [email])
    .then((data) => {
        const favourites = data.rows;
        console.log('fav', favourites);
        res.json({ favourites });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  return router;

};

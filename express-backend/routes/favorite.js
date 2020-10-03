const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req,res) => {
    const email = req.body.name

    return db.query(`SELECT DISTINCT users.id, recipes.name, recipes.description, recipes.img_url
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

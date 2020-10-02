const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/", (req,res) => {

    return db.query(`SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM recipes
    LIMIT 6;`)
    .then((data) => {
        const recipes = data.rows;
        console.log('user', recipes);
        res.json({ recipes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  router.post('/', (req,res) => {
    // console.log('req', req.body)
    const name = req.body.recipes;
    console.log('name', name)

    return db.query(`SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM recipes
    WHERE recipes.name = $1;`,[name])

    .then((data) => {
      // console.log('data', data.rows)
        const recipes = data.rows;
        console.log('everything', recipes);
        res.json({ info });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });

  })

  return router;

};

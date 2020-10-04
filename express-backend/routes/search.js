const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.post("/", (req,res) => {
    console.log("req from search", req.body)

    const splitSearch = req.body.search.toLowerCase().split(' ');
    for (var i = 0; i < splitSearch.length; i++) {
      splitSearch[i] = splitSearch[i].charAt(0).toUpperCase() + splitSearch[i].substring(1);
      }
    const search = splitSearch.join(' ')
    console.log("Search after functions", search)
    return db.query(`SELECT DISTINCT id, name, description, img_url
    FROM recipes
    WHERE name LIKE '%${search}%';`)
    .then((data) => {
      console.log("data after query", data)
        const recipes = data.rows;
        console.log('user', recipes);
        res.json({ recipes });
    })
    .catch((err) => {
      console.log("ERRRRROORRR")
      res.status(500).json({ error: err.message });
    });
  });

  return router;

};

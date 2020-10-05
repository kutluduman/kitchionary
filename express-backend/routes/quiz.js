const express = require("express");
const router = express.Router();

// This route is used for finding the recipes that matches with user's quiz answers

module.exports = (db) => {
  router.post("/", (req, res) => {
    const quiz = req.body.quizInfo;
    const breakfast = quiz.breakfast;
    const lunch = quiz.lunch;
    const appetizer = quiz.appetizer;
    const dinner = quiz.dinner;
    const dessert = quiz.dessert;
    const glutenFree = quiz.glutenFree;
    const nutFree = quiz.nutFree;
    const dairyFree = quiz.dairyFree;
    const vegetarian = quiz.vegetarian;
    const vegan = quiz.vegan;
    const isSalty = quiz.isSalty;
    const isGreasy = quiz.isGreasy;
    const isSpicy = quiz.isSpicy;
    const isSweet = quiz.isSweet;
    const isFruity = quiz.isFruity;
    const isHealthy = quiz.isHealthy;
    const isCold = quiz.isCold;
    const isHot = quiz.isHot;
    const notSalty = quiz.notSalty;
    const notGreasy = quiz.notGreasy;
    const notSpicy = quiz.notSpicy;
    const notSweet = quiz.notSweet;
    const notFruity = quiz.notFruity;
    const notHealthy = quiz.notHealthy;
    const notCold = quiz.notCold;
    const notHot = quiz.notHot;
    const time = quiz.time;

    const queryParams = [];
    const queryNotParams = [];

    let queryString = `SELECT DISTINCT recipes.id, recipes.name, recipes.description, recipes.img_url
    FROM ingredients
    FULL JOIN measurements ON ingredients.id = ingredient_id
    FULL JOIN recipes ON recipes.id = recipe_id
    `;

    if (breakfast) {
      queryParams.push(breakfast);
      queryString += ` WHERE recipes.is_breakfast = ${breakfast}`;
    }

    if (lunch) {
      queryParams.push(lunch);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_lunch = ${lunch}`;
      } else {
        queryString += ` WHERE recipes.is_lunch = ${lunch}`;
      }
    }

    if (appetizer) {
      queryParams.push(appetizer);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_appetizer = ${appetizer}`;
      } else {
        queryString += ` WHERE recipes.is_appetizer = ${appetizer}`;
      }
    }

    if (dinner) {
      queryParams.push(dinner);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_dinner = ${dinner}`;
      } else {
        queryString += ` WHERE recipes.is_dinner = ${dinner}`;
      }
    }

    if (dessert) {
      queryParams.push(dessert);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_dessert = ${dessert}`;
      } else {
        queryString += ` WHERE recipes.is_dessert = ${dessert}`;
      }
    }

    if (glutenFree) {
      queryParams.push(glutenFree);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_gluten_free = ${glutenFree}`;
      } else {
        queryString += ` WHERE recipes.is_gluten_free = ${glutenFree}`;
      }
    }

    if (nutFree) {
      queryParams.push(nutFree);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_nut_free = ${nutFree}`;
      } else {
        queryString += ` WHERE recipes.is_nut_free = ${nutFree}`;
      }
    }

    if (dairyFree) {
      queryParams.push(dairyFree);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_dairy_free= ${dairyFree}`;
      } else {
        queryString += ` WHERE recipes.is_dairy_free = ${dairyFree}`;
      }
    }

    if (vegetarian) {
      queryParams.push(vegetarian);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_vegetarian = ${vegetarian}`;
      } else {
        queryString += ` WHERE recipes.is_vegetarian = ${vegetarian}`;
      }
    }

    if (vegan) {
      queryParams.push(vegan);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_vegan = ${vegan}`;
      } else {
        queryString += ` WHERE recipes.is_vegan = ${vegan}`;
      }
    }

    if (isSalty) {
      queryParams.push(isSalty);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_salty = ${isSalty}`;
      } else {
        queryString += ` WHERE recipes.is_salty = ${isSalty}`;
      }
    }

    if (isGreasy) {
      queryParams.push(isGreasy);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_greasy = ${isGreasy}`;
      } else {
        queryString += ` WHERE recipes.is_greasy = ${isGreasy}`;
      }
    }

    if (isSpicy) {
      queryParams.push(isSpicy);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_spicy = ${isSpicy}`;
      } else {
        queryString += ` WHERE recipes.is_spicy = ${isSpicy}`;
      }
    }

    if (isSweet) {
      queryParams.push(isSweet);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_sweet = ${isSweet}`;
      } else {
        queryString += ` WHERE recipes.is_sweet = ${isSweet}`;
      }
    }
    if (isFruity) {
      queryParams.push(isFruity);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_fruity = ${isFruity}`;
      } else {
        queryString += ` WHERE recipes.is_fruity = ${isFruity}`;
      }
    }
    if (isHealthy) {
      queryParams.push(isHealthy);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_healthy = ${isHealthy}`;
      } else {
        queryString += ` WHERE recipes.is_healthy = ${isHealthy}`;
      }
    }
    if (isCold) {
      queryParams.push(isCold);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_cold = ${isCold}`;
      } else {
        queryString += ` WHERE recipes.is_cold = ${isCold}`;
      }
    }
    if (isHot) {
      queryParams.push(isHot);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.is_hot = ${isHot}`;
      } else {
        queryString += ` WHERE recipes.is_hot = ${isHot}`;
      }
    }

    if (time > 0) {
      queryParams.push(time);
      if (queryParams.length > 1) {
        queryString += ` AND recipes.time <= ${time}`;
      } else {
        queryString += ` WHERE recipes.time <= ${time}`;
      }
    }

    if (notSalty) {
      queryNotParams.push(notSalty);
      if (queryParams.length > 1) {
        queryString += ` AND NOT recipes.is_salty = ${notSalty}`;
      } else {
        queryString += ` WHERE NOT recipes.is_greasy = ${notGreasy}`;
      }
    }

    if (notGreasy) {
      queryNotParams.push(notGreasy);
      if (queryParams.length > 1 || queryNotParams.length > 1) {
        queryString += ` AND NOT recipes.is_greasy = ${notGreasy}`;
      } else {
        queryString += ` WHERE NOT recipes.is_greasy = ${notGreasy}`;
      }
    }

    if (notSpicy) {
      queryNotParams.push(notSpicy);
      if (queryParams.length > 1 || queryNotParams.length > 1) {
        queryString += ` AND NOT recipes.is_spicy = ${notSpicy}`;
      } else {
        queryString += ` WHERE NOT recipes.is_spicy = ${notSpicy}`;
      }
    }

    if (notSweet) {
      queryNotParams.push(notSweet);
      if (queryParams.length > 1 || queryNotParams.length > 1) {
        queryString += ` AND NOT recipes.is_sweet = ${notSweet}`;
      } else {
        queryString += ` WHERE NOT recipes.is_sweet = ${notSweet}`;
      }
    }

    if (notFruity) {
      queryNotParams.push(notFruity);
      if (queryParams.length > 1 || queryNotParams.length > 1) {
        queryString += ` AND NOT recipes.is_fruity = ${notFruity}`;
      } else {
        queryString += ` WHERE NOT recipes.is_fruity = ${notFruity}`;
      }
    }

    if (notHealthy) {
      queryNotParams.push(notHealthy);
      if (queryParams.length > 1 || queryNotParams.length > 1) {
        queryString += ` AND NOT recipes.is_healthy = ${notHealthy}`;
      } else {
        queryString += ` WHERE NOT recipes.is_healthy = ${notHealthy}`;
      }
    }

    if (notCold) {
      queryNotParams.push(notCold);
      if (queryParams.length > 1 || queryNotParams.length > 1) {
        queryString += ` AND NOT recipes.is_cold = ${notCold}`;
      } else {
        queryString += ` WHERE NOT recipes.is_cold = ${notCold}`;
      }
    }

    if (notHot) {
      queryNotParams.push(notHot);
      if (queryParams.length > 1 || queryNotParams.length > 1) {
        queryString += ` AND NOT recipes.is_hot = ${notHot}`;
      } else {
        queryString += ` WHERE NOT recipes.is_hot = ${notHot}`;
      }
    }

    queryString += `;`;
    console.log("query", queryString)

    return db
      .query(queryString)
      .then((data) => {
        const recipes = data.rows;

        res.json({ recipes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};

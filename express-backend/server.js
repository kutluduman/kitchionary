// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
const morgan     = require('morgan');
const cors = require('cors')

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors())

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const recipeRoutes = require("./routes/recipe");
const quizRoutes = require("./routes/quiz");
const breakfastRoutes = require("./routes/breakfast");
const lunchRoutes = require("./routes/lunch");
const appetizerRoutes = require("./routes/appetizer");
const dinnerRoutes = require("./routes/dinner");
const dessertRoutes = require("./routes/dessert");
const mexicanRoutes = require("./routes/mexican");
const italianRoutes = require("./routes/italian")
const indianRoutes = require("./routes/indian");
const chineseRoutes = require("./routes/chinese");
const americanRoutes = require("./routes/american");
const koreanRoutes = require("./routes/korean");
const greekRoutes = require("./routes/greek");
const japaneseRoutes = require("./routes/japanese");
const mediterraneanRoutes = require("./routes/mediterranean");
const spanishRoutes = require("./routes/spanish");
const turkishRoutes = require("./routes/turkish");
const featuresRoutes = require("./routes/features");







// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("", usersRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/login",loginRoutes(db));
app.use("/recipes", recipeRoutes(db));
app.use("/quiz", quizRoutes(db));
app.use("/breakfast", breakfastRoutes(db));
app.use("/lunch", lunchRoutes(db));
app.use("/appetizer", appetizerRoutes(db));
app.use("/dinner", dinnerRoutes(db));
app.use("/dessert", dessertRoutes(db));
app.use("/mexican", mexicanRoutes(db));
app.use("/chinese", chineseRoutes(db));
app.use("/italian", italianRoutes(db));
app.use("/indian", indianRoutes(db));
app.use("/american", americanRoutes(db));
app.use("/japanese", japaneseRoutes(db));
app.use("/mediterranean", mediterraneanRoutes(db));
app.use("/korean", koreanRoutes(db));
app.use("/greek", greekRoutes(db));
app.use("/spanish", spanishRoutes(db));
app.use("/turkish", turkishRoutes(db));
app.use("/features", featuresRoutes(db));


// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.send("okay");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

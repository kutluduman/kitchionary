import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Door from "./components/Door.jsx";
import Question from "./components/Question";
import Globe from "./components/Globe.jsx"
import FeaturedDessert from "./components/FeaturedDessert"
import FeaturedPasta from "./components/FeaturedPasta";
import FeaturedSalad from "./components/FeaturedSalad";
import FridgeBoxImage from "./components/FridgeBoxImage";
import FridgeCheckbox from "./components/FridgeCheckbox";
import FridgeAvatar from "./components/FridgeAvatar";
import FridgeForm from "./components/FridgeForm";
import RecipeDetail from "./components/RecipeDetail";
import MatchingRecipes from "./components/MatchingRecipes";
import GlobeFeature from "./components/GlobeFeature";
import AddRecipe from "./components/AddRecipe";
import axios from 'axios';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import Login from "./components/Login";
import LoginTemplate from "./components/LoginTemplate";
import RegisterTemplate from "./components/RegisterTemplate";
import Register from "./components/Register";
import "./styles/mode.css";
import SimpleGlobe from './components/GlobeFeature';
import OverlayGlobe from './components/OverlayGlobe';
import "./styles/globefeature.css";
import QuizForm from "./components/QuizForm";
import Favorite from "./components/Favorite";
import MyRecipes from "./components/MyRecipes";


function App() {
  const [matchingRecipes, setMatchingRecipes] = useState({});
  // const [matchingQuiz, setMatchingQuiz] = useState({});
  const [recipeData, setRecipeData] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  const [inputState, setInputState] = useState({
    name: '',
    breakfast: false,
    lunch: false,
    appetizer: false,
    dinner: false,
    dessert: false,
    glutenFree: false,
    nutFree: false,
    dairyFree: false,
    vegetarian: false,
    vegan: false,
    isSalty: false,
    isGreasy: false,
    isSpicy: false,
    isSweet: false,
    isFruity: false,
    isHealthy: false,
    isCold: false,
    isHot: false,
    notSalty: false,
    notGreasy: false,
    notSpicy: false,
    notSweet: false,
    notFruity: false,
    notHealthy: false,
    notCold: false,
    notHot: false,
    time: 0,
  });

  console.log('matching', matchingRecipes);
  console.log('RECIPEDATA', recipeData);
  // const { id } = matchingRecipes.id;


  return (
    <Router>
      <div className="App">
        <Navbar cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} />
          <dialog role="alertdialog" id="login" open>
            <LoginTemplate cookies={cookies} setCookie={setCookie} />
          </dialog>
          <dialog role="alertdialog" id="register">
            <RegisterTemplate cookies={cookies} setCookie={setCookie} />
          </dialog>
          <main role="main">
            <Switch>
              <Route exact path="/">
                <Home setMatchingRecipes={setMatchingRecipes} setRecipeData={setRecipeData} cookies={cookies} />
              </Route>
              <Route exact path="/breakfast">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/lunch">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/appetizer">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/dinner">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/dessert">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/american">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/chinese">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/indian">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/greek">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/italian">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/japanese">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/korean">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/mediterranean">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/mexican">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/spanish">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/turkish">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route exact path="/fridge">
                <FridgeForm inputState={inputState} setInputState={setInputState} setMatchingRecipes={setMatchingRecipes} />
              </Route>
              <Route path="/quiz">
                <QuizForm inputState={inputState} setInputState={setInputState} setMatchingRecipes={setMatchingRecipes} />
              </Route>
              <Route path="/globe">
                <GlobeFeature setRecipeData={setRecipeData} setMatchingRecipes={setMatchingRecipes} />
              </Route>
              <Route path="/recipes/:id" render={(props) => <RecipeDetail {...props} recipeData={recipeData} />} />
              <Route path="/recipes">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>

              <Route path="/myrecipes">
                <MyRecipes cookies={cookies} />
              </Route>
              <Route path="/favorite">
                <Favorite />
              </Route>
              <Route path="/add">
                <AddRecipe cookies={cookies} />
              </Route>
            </Switch>
          </main>
          </div>
    </Router>

  )  
      
}
export default App;













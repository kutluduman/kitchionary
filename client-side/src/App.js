import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import FridgeForm from "./components/Fridge/FridgeForm";
import RecipeDetail from "./components/Recipes/RecipeDetail";
import MatchingRecipes from "./components/Recipes/MatchingRecipes";
import GlobeFeature from "./components/Globe/GlobeFeature";
import AddRecipe from "./components/Recipes/AddRecipe";
import LoginTemplate from "./components/Users/LoginTemplate";
import RegisterTemplate from "./components/Users/RegisterTemplate";
import "./styles/mode.css";
import "./styles/globefeature.css";
import QuizForm from "./components/Quiz/QuizForm";
import Favorite from "./components/Recipes/Favorite";
import MyRecipes from "./components/Recipes/MyRecipes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});


function App() {
  const [matchingRecipes, setMatchingRecipes] = useState({});
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

  const [modal,toggleModal] = useState(false);
  const [modalRegister, toggleModalRegister] = useState(false);

  const handleToggleModal = () => toggleModal(prev => !prev);
  const handleToggleModalRegister = () => toggleModalRegister(prev => !prev);

  return (
    <Router>
      <div className="App">
        <Navbar cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} toggleModal= {handleToggleModal} toggleModalRegister= {handleToggleModalRegister} setMatchingRecipes={setMatchingRecipes} />
            {modal && <LoginTemplate cookies={cookies} setCookie={setCookie} />}
            {modalRegister && <RegisterTemplate cookies={cookies} setCookie={setCookie} />}
          {/* <dialog role="alertdialog" id="register">
            <RegisterTemplate cookies={cookies} setCookie={setCookie} />
          </dialog> */}
          <main role="main" class="page">
            <Switch>
              <Route exact path="/">
                <Home setMatchingRecipes={setMatchingRecipes} setRecipeData={setRecipeData} cookies={cookies} toggleModal= {handleToggleModal} />
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
              <Route path="/recipes/:id" render={(props) => <RecipeDetail {...props} recipeData={recipeData} cookies={cookies} />} />
              <Route path="/recipes">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
              <Route path="/myrecipes">
                <MyRecipes cookies={cookies} setRecipeData={setRecipeData}/>
              </Route>
              <Route path="/favorite">
                <Favorite cookies={cookies} setRecipeData={setRecipeData}/>
              </Route>
              <Route path="/add">
                <AddRecipe cookies={cookies} />
              </Route>
              <Route path="/search">
              <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData} />
              </Route>
            </Switch>
          </main>
          </div>
    </Router>
  )   
}
export default App;













import React,{useState} from 'react';
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


function App() {
  const [matchingRecipes, setMatchingRecipes] = useState({});
  // const [matchingQuiz, setMatchingQuiz] = useState({});
  const [recipeData, setRecipeData] = useState({});
  const [inputState, setInputState] = useState({
    name: '',
    breakfast: false,
    lunch: false,
    appetizer: false,
    dinner: false,
    dessert: false,
    glutenFree : false,
    nutFree : false,
    dairyFree : false,
    vegetarian : false,
    vegan : false,
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
  // const { id } = matchingRecipes.id;
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <dialog role="alertdialog" id="login" open>
          <LoginTemplate/>
        </dialog>
        <dialog role="alertdialog" id="register">
          <RegisterTemplate/>
        </dialog>
        <main role="main">
            <Switch>
             <Route exact path="/">
             <Home inputState={inputState} setInputState={setInputState}/>
             {/* <Door/>
             <Question/>
             <Globe/>  */}
              </Route>
              <Route exact path="/breakfast">
                <MatchingRecipes matchingRecipes={matchingRecipes}/>
              </Route>
              <Route exact path="/lunch">
                <MatchingRecipes matchingRecipes={matchingRecipes}/>
              </Route>
              <Route exact path="/appetizer">
                <MatchingRecipes matchingRecipes={matchingRecipes}/>
              </Route>
              <Route exact path="/dinner">
                <MatchingRecipes matchingRecipes={matchingRecipes}/>
              </Route>
              <Route exact path="/dessert">
                <MatchingRecipes matchingRecipes={matchingRecipes}/>
              </Route>
              <Route exact path="/fridge">
                <FridgeForm inputState={inputState} setInputState={setInputState} setMatchingRecipes={setMatchingRecipes} />
              </Route>
              {/* <Route exact path="/fridge/recipes">
                <MatchingRecipes matchingRecipes={matchingRecipes}/>
              </Route> */}
              <Route path="/quiz">
                <QuizForm inputState={inputState} setInputState={setInputState} setMatchingRecipes={setMatchingRecipes}/>
              </Route>
              <Route path="/globe">
                <Globe/>
              </Route>
              <Route path="/recipes/:id" render={(props) => <RecipeDetail {...props} recipeData={recipeData}/>} />
              <Route path="/recipes">
                <MatchingRecipes matchingRecipes={matchingRecipes} setRecipeData={setRecipeData}/>
              </Route>
              
              
              {/* <Route path="/fridge/recipes/1">
                <RecipeDetail/>
              </Route> */}
            </Switch>
            {/* <div className="featured">
              <FeaturedSalad/>
              <FeaturedPasta/>
              <FeaturedDessert/>
            </div> */}
        </main>
      </div>
    </Router>
  );

}
export default App;













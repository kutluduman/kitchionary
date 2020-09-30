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


function App() {
  const [matchingRecipes, setMatchingRecipes] = useState({});
  const [recipeData, setRecipeData] = useState({});

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
             <Home/>
             {/* <Door/>
             <Question/>
             <Globe/>  */}
              </Route>
              <Route exact path="/fridge">
                <FridgeForm setMatchingRecipes={setMatchingRecipes} />
              </Route>
              {/* <Route exact path="/fridge/recipes">
                <MatchingRecipes matchingRecipes={matchingRecipes}/>
              </Route> */}
              <Route path="/question">
                <Question/>
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













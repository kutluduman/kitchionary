import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Door from "./components/Door.jsx";
import Question from "./components/Question";
import Globe from "./components/Globe.jsx"
import FeaturedDessert from "./components/FeaturedDessert"
import FeaturedPasta from "./components/FeaturedPasta";
import FeaturedSalad from "./components/FeaturedSalad";

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


function App() {
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
             <Route path="/">
             <Home/>
             {/* <Door/>
             <Question/>
             <Globe/>  */}
              </Route>
              <Route path="/door">
                <Door/>
              </Route>
              <Route path="/question">
                <Question/>
              </Route>
              <Route path="/globe">
                <Globe/>
              </Route>
              <Route path="/recipes/:id">
              </Route>
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













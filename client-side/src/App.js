import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Door from "./components/Door.jsx";
import Question from "./components/Question";
import Globe from "./components/Globe.jsx"
import FeaturedDessert from "./components/FeaturedDessert"
import FeaturedPasta from "./components/FeaturedPasta";
import FeaturedSalad from "./components/FeaturedSalad";


import "./styles/mode.css";




function App() {
  return (
    <div>
    <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

      </head>
     
    <div className="App">
     <Navbar/>
     <Home/>
     <div class="mode">
        <Door/>
        <Question/>
        <Globe />
     </div>
     <div class="featured">
     <FeaturedSalad/>
    <FeaturedPasta/>
    <FeaturedDessert/>
    </div>
    </div>
    </div>
  );
}
export default App;













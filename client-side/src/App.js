import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Door from "./components/Door.jsx";
import Question from "./components/Question";
import axios from "axios";
import Globe from "./components/Globe.jsx"
import FeaturedDessert from "./components/FeaturedDessert"
import FeaturedPasta from "./components/FeaturedPasta";
import FeaturedSalad from "./components/FeaturedSalad";
import "./styles/mode.css";
import SimpleGlobe from './components/GlobeFeature';
import OverlayGlobe from './components/OverlayGlobe';



function App() {
  // axios({
  //   method: "GET",
  //   url: "http://localhost:8080/",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }).then(res => {
  //   console.log(res.data.message);
  // });

  // axios({
  //   method: 'post',
  //   url: '/user/12345',
  //   data: {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   }
  // });

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
    {/* <SimpleGlobe/>
    <OverlayGlobe/> */}
    </div>
  );
}
export default App;













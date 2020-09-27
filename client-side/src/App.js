import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import axios from "axios";


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
    </div>
    </div>
  );
}
export default App;













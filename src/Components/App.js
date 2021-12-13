import React from "react";
import Content from "./Content";
import Home from "./Home";
import {Routes,Route} from "react-router-dom";
function App() {
  
  return (
  <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path ='/content' element={<Content/>}/>
  </Routes>
);
}

export default App;

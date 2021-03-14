import React from "react";
import {BrowserRouter , Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";


function App() {
 
  return (
   <BrowserRouter>
    <Route path="/" exact>
      <Home />
    </Route>
    </BrowserRouter>
  );
}

export default App;

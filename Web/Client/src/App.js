import React from "react";
import {BrowserRouter , Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import FormCancer from './pages/PredictCancer/PredictCancer';


function App() {
 
  return (
   <BrowserRouter>
    <Route path="/" exact>
      <Home />
    </Route>

    <Route path="/PredictCancer"  >
    <FormCancer />
    </Route>

    </BrowserRouter>
  );
}

export default App;

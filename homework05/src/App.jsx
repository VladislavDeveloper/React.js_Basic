import { React } from "react";

import Header from "./Components/Header/Header";
import { Router } from "./Components/Router";

import "./App.css"

function App(){
    return(
        <div className="app">
            <Header />
            <div className="app-container">
                  <Router /> 
            </div>
            
        </div>
    )
}

export default App;
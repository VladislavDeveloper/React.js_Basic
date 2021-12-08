import { React, useState } from "react";
import { Provider } from "react-redux";

import Header from "./Components/Header/Header";
import Router from "./Router/Router";
import { store } from "./Store";

import "./App.css"

function App(){

    return(
            <Provider store={store}>
                <div className="app">
                        <Header />
                    <div className="app-container">
                        <Router />
                    </div>
                </div>
            </Provider>
    )
}

export default App;
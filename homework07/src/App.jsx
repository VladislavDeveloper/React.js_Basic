import { React } from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Header from "./Components/Header/Header";
import Router from "./Router/Router";
import { store } from "./Store";
import { persistor } from "./Store";

import "./App.css"

function App(){

    return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <div className="app">
                            <Header />
                        <div className="app-container">
                            <Router />
                        </div>
                    </div>
                </PersistGate>
            </Provider>
    )
}

export default App;
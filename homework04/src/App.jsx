import { React, useState } from "react";
import Header from "./Components/Header/Header";
import ChatsList from "./Components/ChatsList/ChatsList";
import MessageForm from "./Components/MessageForm/MessageForm";

import { Router } from "./Components/Router";

import "./App.css"

function App(){

    const [ contacts, setContacts ] = useState([
        {id:1, name:"Анна"},
        {id:2, name:"Макс"},
        {id:3, name:"Илья Михайлов"},
    ]) 

    return(
        <div className="app">
            <Header />
            <div className="app-container">
                <ChatsList contacts={contacts} />
                <div className="main-content">
                  <Router />
                  <MessageForm contacts={contacts} />  
                </div>
            </div>
            
        </div>
    )
}

export default App;
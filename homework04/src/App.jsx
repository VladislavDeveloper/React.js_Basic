import React from "react";

import Header from "./Components/Header/Header";
import ChatsList from "./Components/ChatsList/ChatsList";
import MessageList from "./Components/MessageList/MessageList";
import MessageForm from "./Components/MessageForm/MessageForm";

import "./App.css"

function App(){
    return(
        <div className="app">
            <Header />
            <div className="app-container">
                <ChatsList />
                <div className="main-content">
                  <MessageList />
                  <MessageForm />  
                </div>
            </div>
            
        </div>
    )
}

export default App;
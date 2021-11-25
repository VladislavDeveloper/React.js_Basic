import React, { useState } from "react";

import "./App.css"


import Header from "./Components/Header/Header";
import MessageForm from "./Components/MessageForm/MessageForm";
import UsersList from "./Components/UsersList/UsersList";
import MessageList from "./Components/MessageList/MessageList";


import avatar from "./Images/chat-bot-icon.png"
import michael from "./Images/michael-icon.jpg"
import lena from "./Images/lena-icon.jpg"
import maxSuper from "./Images/max-icon.jpg"

function App(){
    const [users, setUsers] = useState([
        {id: 1, name: "Bot-Helper", img: avatar},
        {id: 2, name: "Михаил", img: michael},
        {id: 3, name: "Лена", img: lena},
        {id: 4, name: "MaxSuper555", img: maxSuper},
    ]);

    const [messages, setMessages] = useState([]);

    function sendMessage(text){
        setMessages(messages.concat([{
            text,
            id: Date.now(),
            author: "me"
        }]))

        console.log(messages);
    };


    return(
        <div className="app">
            <Header />
            <div className="container">
                <UsersList users={users} />
                <MessageList />  
            </div>
            
            <MessageForm sendMessage={sendMessage} />
        </div>
        
    )
}

export default App
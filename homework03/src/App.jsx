import React, { useState, useEffect } from "react";

import Header from "./Components/Header/Header";
import MessageForm from "./Components/MessageForm/MessageForm";
import UsersList from "./Components/UsersList/UsersList";
import MessageList from "./Components/MessageList/MessageList";

import "./App.css"


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
            author: "You"
        }]))

        console.log(messages);
    };


    function sendAnswer(text){
        setMessages(messages.concat([{
            text,
            id: Date.now(),
            author: 'Bot'
        }]))
    }

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];

        if(lastMessage?.author === "You"){
            setTimeout(()=>{
                if(lastMessage?.text.toLowerCase() === "привет" || lastMessage?.text.toLowerCase() === "здравствуйте")sendAnswer("Здравствуйте ! Я Ваш личный бот-помощник ) Чем могу помочь?  Поддержка ? Задать мне вопрос ? Завершить чат ?");
                if(lastMessage?.text.toLowerCase() === "поддержка")sendAnswer("Для обращения в службу поддержки нажмите 1")
                if(lastMessage?.text.toLowerCase() === "1")sendAnswer("Перенаправляю вас в службу поддержки...")
                if(lastMessage?.text.toLowerCase() === "вопрос" || lastMessage?.text.toLowerCase() === "задать вопрос" )sendAnswer("Напишите Ваш вопрос")
                if(lastMessage?.text.toLowerCase() === "завершить чат")sendAnswer("До свидания и хорошего дня !")
                if(lastMessage?.text.toLowerCase() === "")sendAnswer("До свидания и хорошего дня !");
            }, 1200)
        }
    },[messages]);


    return(
        <div className="app">
            <Header />
            <div className="container">
                <UsersList users={users} />
                <MessageList messages={messages} />  
            </div>
            <MessageForm sendMessage={sendMessage} />
        </div>
        
    )
}

export default App
import react, { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import { MessageForm } from "./Components/MessageForm/MessageForm";
import { MessageList } from "./Components/MessageList/MessageList";

import './App.css'

function App(){

    const [messages, setMessages] = useState([]);

    function sendMessage(text){
        setMessages(messages.concat([{
            text,
            id: Date.now(),
            author: "me"
        }]))
    };

    useEffect(() => {
        
        const lastMessage = messages[messages.length -1]

        if(lastMessage?.author === "me"){

            if(lastMessage?.text.toLowerCase() === "привет" || lastMessage?.text.toLowerCase() === "здравствуйте"){
                setTimeout(()=>{
                    setMessages(messages.concat([{
                    text: "Привет ! Я Бот, меня зовут Sierra",
                    id: Date.now(),
                    author: "Sierra"
                    }]))
                }, 2000);
            }
            if(lastMessage?.text.toLowerCase() === "сколько времени ?" || lastMessage?.text.toLowerCase() === "сколько время ?"){
                setTimeout(()=>{

                    let hourNow = new Date().getHours();
                    let minutesNow = new Date().getMinutes();
    
                    setMessages(messages.concat([{
                    text: `Сейчас ${hourNow} часов ${minutesNow} минут`,
                    id: Date.now(),
                    author: "Sierra"
                    }]))
                }, 2000);
            }
            if(lastMessage?.text.toLowerCase() === "что ты умеешь ?"){
                setTimeout(()=>{
                    setMessages(messages.concat([{
                    text: "Хм, на данный момент мой функционал ограничен, но я быстро учусь ;)",
                    id: Date.now(),
                    author: "Sierra"
                    }]))
                }, 2000);
            }
            if(lastMessage?.text.toLowerCase() === "как выучить react ?" || lastMessage?.text.toLowerCase() === "как выучить реакт ?"){
                setTimeout(()=>{

                    let reactLink = "https://ru.reactjs.org/"

                    setMessages(messages.concat([{
                    text: `Я бы рекомендовала начать с изучения официальной документации на сайте ${reactLink} `,
                    id: Date.now(),
                    author: "Sierra"
                    }]))
                }, 2000);
            }
            if(lastMessage?.text.toLowerCase() === "как сгенерировать случайное число от 0 до 100 ?" || lastMessage?.text.toLowerCase() === "число от 0 до 100"){
                setTimeout(()=>{
                    setMessages(messages.concat([{
                    text: "Воспользуйся методом Math.random, а затем отмасштабируй до нужного значения. В данном случае напиши Math.floor(Math.random() * 101)",
                    id: Date.now(),
                    author: "Sierra"
                    }]))
                }, 3000);
            }
            if(lastMessage?.text.toLowerCase() === "спасибо" || lastMessage?.text.toLowerCase() === "благодарю"){
                setTimeout(()=>{
                    setMessages(messages.concat([{
                    text: "Рада была помочь ) Обращайся !",
                    id: Date.now(),
                    author: "Sierra"
                    }]))
                }, 3000);
            }
            if(lastMessage?.text.toLowerCase() === "ты классная" || lastMessage?.text.toLowerCase() === "ты супер"){
                setTimeout(()=>{
                    setMessages(messages.concat([{
                    text: "Ты тоже ;)",
                    id: Date.now(),
                    author: "Sierra"
                    }]))
                }, 3000);
            }
            if(lastMessage?.text.toLowerCase() === "пока"){
                setTimeout(()=>{
                    setMessages(messages.concat([{
                    text: "Удачи, приятно было пообщаться",
                    id: Date.now(),
                    author: "Sierra"
                    }]))
                }, 1000);
            }
        }
    }, [messages]);

    return(
        <div className="App">
            <div className="wrapper">
                <Header />
                <MessageList messages={messages} />
                <MessageForm onSend={sendMessage} />
            </div>
        </div>
    )
}

export default App
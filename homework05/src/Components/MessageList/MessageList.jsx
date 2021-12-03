import React from "react";
import { useParams } from "react-router-dom";

import "./MessageList.css"

function MessageList({contacts}){
    const { Id } = useParams();

    if(Id){
        return(
            <>
            <div className="chat">
                <h3>Пользователь с {Id}</h3>
            </div>
            <div className="send-message">
            <form className="message-form">
                <div className="form-container">
                <div className="input-form">
                <input className="message-input" 
                 type="text" 
                 placeholder="Type your message..."
                 /> 
                </div>
                <button className="send-message-btn" type="submit">Send</button>
                </div> 
            </form>
            </div>
            </>
        )
    }
}

export default MessageList;
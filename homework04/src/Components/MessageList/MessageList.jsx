import React from "react";
import { useParams } from "react-router-dom";

import "./MessageList.css"

function MessageList({contacts}){
    const { Id } = useParams();

    if(Id){
        return(
            <div className="chat">
                <h3>Пользователь с {Id}</h3>
            </div>
        )
    }else{
        return(
            <div className="chat">
                <h3>Выберите чат</h3>
            </div>
        )
    }
}

export default MessageList;
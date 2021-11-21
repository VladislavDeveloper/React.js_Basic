import React from "react";
import './MessageList.css'

export function MessageList({messages}){
    return(
        <div className="message-list">
            {messages.map((message) => {
                return <div className={message.author === "me" ? "message" : "answer"} key={message.id}>
                    {message.text}
                    <div className="author">{message.author}</div>
                </div>
            })}
        </div>
    )
}
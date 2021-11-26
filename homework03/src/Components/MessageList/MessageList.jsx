import React from "react";

import "./MessageList.css"

const MessageList = ({messages}) => {
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

export default MessageList;
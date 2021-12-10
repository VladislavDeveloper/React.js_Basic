import React, { useState, useCallback } from "react";
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { chatListSelector } from "../../Store/chats/selectors";
import { messageListSelector } from "../../Store/messages/selectors"
import { userNameSelector } from "../../Store/profile/selectors";
import { addMessage } from "../../Store/messages/actions";

import "./MessageList.css"

function MessageList(){

    const { chatId } = useParams();

    const dispatch = useDispatch()

    const chats = useSelector(chatListSelector);
    const messages = useSelector(messageListSelector);
    const author = useSelector(userNameSelector)

    const [message, setMessage] = useState('')

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const onAddMessage = () => {
        dispatch(addMessage(chatId, message, author));
    } 

    console.log(messages[chatId]);


    if(messages[chatId]){
        return( 
        <>
        <div className="chat">
                {messages[chatId].map((mess) => {
                    return <div className="message" key={mess.id}><h3>{mess.author}</h3><p>{mess.text}</p></div>
                })}
        </div>


        <div className="send-message">
        <div className="message-form">
            <div className="form-container">
                <div className="input-form">
                <input className="message-input" 
                type="text" 
                placeholder="Type your message..."
                value={message} 
                onChange={handleMessage}/> 
                </div>
            <button className="send-message-btn" onClick={onAddMessage}>Send</button>
            </div> 
        </div>
        </div>
        </>
        )
    }
    else{
        return(
        <>
        <div className="send-message">
        <div className="message-form">
            <div className="form-container">
                <div className="input-form">
                <input className="message-input" 
                type="text" 
                placeholder="Type your message..."
                value={message} 
                onChange={handleMessage}/> 
                </div>
            <button className="send-message-btn" onClick={onAddMessage}>Send</button>
            </div> 
        </div>
        </div>
        </>
        )
    }
}

export default MessageList;
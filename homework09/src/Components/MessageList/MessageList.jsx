import React, { useState, useCallback } from "react";
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { messageListSelector } from "../../Store/messages/selectors"
import { userNameSelector } from "../../Store/profile/selectors";
import { addMessageWithThunk } from "../../Store/messages/actions";

import "./MessageList.css"

function MessageList(){

    const { chatId } = useParams();

    const dispatch = useDispatch()

    const messages = useSelector(messageListSelector);

    const author = useSelector(userNameSelector)

    const [message, setMessage] = useState('')

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const onAddMessage = useCallback(()=> {
        dispatch(addMessageWithThunk(chatId, message, author));
    }, [chatId, message, author, dispatch]);


    if(messages[chatId]){
        return( 
            <>
                <div className="chat">
                        {messages[chatId].map((mess) => {
                            return (
                                <div className={mess.author === author ? "message" : "answer"} key={mess.id}>
                                <p>{mess.text}</p>
                                <div className="author">{mess.author}</div>
                                </div>
                            )
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
                <div className="no-chat-message">
                        Чата с этим пользователем ещё нет.
                        Напишите сообщение, чтобы создать чат
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
}

export default MessageList;
import React, { useState } from "react";

import "./MessageForm.css"


export function MessageForm({onSend}){
    const[value, setValue] = useState('');

    const submitHandler = event => {
        event.preventDefault()

        if(value.trim()){
            onSend(value)
            setValue('')
        }
    }

    return(
        <div className="send-message">
            <form className="message-form" onSubmit={submitHandler}>
                <div className="input-form">
                <input className="message-input"
                 value={value} 
                 type="text" 
                 placeholder="Type your message..."
                 onChange={event => {
                     setValue(event.target.value)
                 }} /> 
                </div>
                <button className="send-message-btn" type="submit">Send</button> 
            </form>
            
        </div>
    )
}
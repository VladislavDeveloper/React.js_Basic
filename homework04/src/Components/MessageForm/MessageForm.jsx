import React from "react";

import "./MessageForm.css"

function MessageForm(){
    return(
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
    )
}

export default MessageForm
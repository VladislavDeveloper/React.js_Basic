import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./MessageForm.css"



const MessageForm = ({sendMessage}) => {

    const[value, setValue] = useState('');

    const submitHandler = event => {
        event.preventDefault()

        if(value.trim()){
            sendMessage(value)
            setValue('')
        }
    }


    return(
        <div className="message-form">
            <form className="message-form" onSubmit={submitHandler}>
                <TextField size="small"
                 autoFocus={true}
                 placeholder="Type Your Message"
                 value={value}
                 onChange={event => 
                 {setValue(event.target.value)}}
                  />

                <Button variant="contained" type="submit">Send</Button>
            </form>
        </div>
    )
    
}


export default MessageForm
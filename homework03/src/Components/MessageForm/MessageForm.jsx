import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

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
                <TextField id="standard-basic" placeholder="Type Your Message" variant="standard" autoFocus={true} fullWidth={true} />
                <Button variant="contained" size="medium" endIcon={<SendIcon />} type="submit">Send</Button>
            </form>
        </div>
    )
    
}


export default MessageForm
import React from 'react';
import './Message.css'

const Message = (props) => {
    return(
        <div className='Meassage'>
            <header className='MessageHeader'>
                <h3>Meassage</h3>
                <div className='line' />
                <div>{props.message}</div>
            </header>
        </div>
    )
}


export default Message;
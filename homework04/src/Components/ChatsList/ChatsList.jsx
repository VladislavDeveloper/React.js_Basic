import React from "react";
import { Link } from "react-router-dom";

import "./ChatsList.css"

function ChatsList({contacts}){

    return(
        <div className="contacts-list">
            <h3>Ваши контакты:</h3>
            {contacts.map((contact) => {
                return  <div className="contact-profile" key={contact.id}>
                         <Link to={`chat/Id${contact.id}`}><h3>{contact.name}</h3></Link>
                        </div>
            })}
        </div>
    )
}

export default ChatsList;
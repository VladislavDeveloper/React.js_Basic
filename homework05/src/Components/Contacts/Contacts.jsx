import { React, useState } from "react";
import { Link } from "react-router-dom";

import "./Contacts.css"

function Contacts(){

    const [ contacts, setContacts ] = useState([
        {id:1, name:"Анна"},
        {id:2, name:"Макс"},
        {id:3, name:"Илья Михайлов"},
    ]) 


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

export default Contacts;
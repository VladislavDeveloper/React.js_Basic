import react from "react";
import "./Header.css"

import avatar from "../../images/avatar.jpg"


export function Header(){
    return(
        <div className="container">
            <div className="Header">
                <div className="rigth-header">
                    <button className="back-btn">Back</button>
                </div>
                <div className="left-header">
                    <img className="avatar" src={avatar} alt="avatar" />
                </div>
            </div>
        </div>
    )
}
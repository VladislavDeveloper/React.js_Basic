import React from "react";
import Avatar from '@mui/material/Avatar';

import "./Header.css"

function Header(){
    return(
        <div className="header">
            <div className="header-content">
                <div className="left-header">
                    <h2>Messenger</h2>
                </div>
                <div className="right-header">
                    <h3 className="user-name">User</h3>
                    <Avatar src="/broken-image.jpg" />
                </div>
            </div>
            
        </div>
    )
}

export default Header;
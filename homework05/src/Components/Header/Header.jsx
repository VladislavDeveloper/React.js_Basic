import React from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

import "./Header.css"

function Header(){
    return(
        
            <div className="header">
                <div className="header-content">
                    <div className="left-header">
                        <Link className="nav-links" to="/">
                            <h2>Messenger</h2>
                        </Link>
                        <Link className="nav-links" to="/contacts">
                            <h2>Contacts</h2>
                        </Link>
                    </div>
                    <div className="right-header">
                    <h3 className="user-name">User</h3>
                        <Link to="/profile">
                            <Avatar src="/broken-image.jpg" />  
                        </Link>
                    </div>
                </div>
            </div>
        
    )
}

export default Header;
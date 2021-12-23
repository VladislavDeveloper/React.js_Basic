import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import PublicIcon from '@mui/icons-material/Public';

import "./Header.css"

function Header(){

    const { userName } = useSelector((state) => state.profile);

    return(
        
            <div className="header">
                <div className="header-content">
                    <div className="left-header">
                        <Link className="nav-link" to="/">
                            <MessageSharpIcon fontSize="large" />
                        </Link>
                        <Link className="nav-link" to="/news">
                            <PublicIcon fontSize="large" />
                        </Link>
                    </div>
                    <div className="right-header">
                        <h3 className="user-name">{ userName }</h3>
                        <Link className="nav-link" to="/profile">
                            <Avatar src="/broken-image.jpg" />  
                        </Link>
                    </div>
                </div>
            </div>
        
    )
}

export default Header;
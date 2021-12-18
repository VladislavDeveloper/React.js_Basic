import React from "react";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import "./Header.css"

import botIcon from "../../Images/chat-bot-icon.png"; 

const Header = () => {
    return(
        <div className="header">
            <div className="rigth-header">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                </IconButton>
            </div>
            <div className="left-header">
                <Avatar alt="Chat Bot" src={botIcon} />
            </div>
        </div>
    )
}

export default Header
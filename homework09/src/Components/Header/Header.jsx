import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from '@mui/material/Avatar';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import PublicIcon from '@mui/icons-material/Public';

import { initUserNameWithThunk } from "../../Store/profile/actions";

import "./Header.css"


function Header(){

    const dispatch = useDispatch();

    const { userName, auth } = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(initUserNameWithThunk())
    },[])
    return(
        
            <div className="header">
                <div className="header-content">
                    <div className="left-header">
                        <Link className={auth?"nav-link" : "nav-link hide"} to="/">
                            <MessageSharpIcon fontSize="large" />
                        </Link>
                        <Link className={auth?"nav-link" : "nav-link hide"} to="/news">
                            <PublicIcon fontSize="large" />
                        </Link>
                    </div>
                    <div className={auth? "right-header" : "right-header hide"}>
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
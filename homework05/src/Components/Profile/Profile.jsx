import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';

import { toggleUserInfo } from "../../Store/profile/actions";
import { toggleUserStatus } from "../../Store/profile/actions";


import "./Profile.css"

const userName = "User"

function Profile(){

    const dispatch = useDispatch();

    const { userName, lastName, dateOfburth, showUserInfo, online } = useSelector((state) => state)

    const showFullInfo = () => {
        dispatch(toggleUserInfo());
    }

    const changeUserStatus = () => {
        dispatch(toggleUserStatus());
    }

    return(
        <div className="profile-page">
            <div className="profile-info">
                <h2>Ваш профиль</h2>
                <Avatar sizes="large" src="/broken-image.jpg" />
                <h3>{ userName }</h3>
                {online ? 
                    <div className="online-marker">online</div>
                    : 
                    <div className="offline-marker">offline</div>
                }
                
                <label>
                    <input type="checkbox" value="1" onChange={changeUserStatus} /> 
                    <span>online</span>
                </label>
                {showUserInfo ? <div className="user-info">
                    <h4>{userName}</h4>
                    <h4>{lastName}</h4>
                    <h4>{dateOfburth}</h4>
                </div> : <h3>Показать информацию о пользователе</h3>}
                <button onClick={showFullInfo}>User info</button>
            </div>
        </div>
    )
}

export default Profile
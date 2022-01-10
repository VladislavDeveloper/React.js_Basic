import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';

import { changeUserName } from "../../Store/profile/actions"
import { profileSelector } from "../../Store/profile/selectors";

import "./Profile.css"


function Profile(){

    const dispatch = useDispatch()

    const { userName } = useSelector(profileSelector)
    const [ value, setValue ] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
    }
    
    const setUserName = useCallback(() => {
        dispatch(changeUserName(value))
        }, [dispatch, value]    
    )

    return(
        <div className="profile-page">
            <div className="profile-info">
                <h2>Ваш профиль</h2>
                <Avatar sizes="large" src="/broken-image.jpg" />
                <h3>{ userName }</h3>
                <div className="decor-line"></div>
                <div className="acount-rename">
                    <input value={value} onChange={handleChange} type="text" />
                    <button className="rename-btn" onClick={setUserName}>Rename</button>
                </div>
            </div>
        </div>
    )
}

export default Profile



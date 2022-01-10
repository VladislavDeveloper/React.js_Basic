import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import firebase from "firebase";

import { profileSelector } from "../../Store/profile/selectors";
import { initUserNameWithThunk } from "../../Store/profile/actions";
import { changeUserName } from "../../Store/profile/actions";

import "./Profile.css"

function Profile(){
    const db = firebase.database();

    const dispatch = useDispatch()

    const { auth, userName } = useSelector(profileSelector)
    const [ value, setValue ] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
    }

    const changeName = () => {
        dispatch(changeUserName(value))
    }
    

    useEffect(() => {
        dispatch(initUserNameWithThunk())
    },[])

    return(
        <div className="profile-page">
            <div className="profile-info">
                <h2>Ваш профиль</h2>
                <Avatar sizes="large" src="/broken-image.jpg" />
                <h3>{ userName }</h3>
                <p>{ auth.email }</p>
                <div className="decor-line"></div>
                <div className="acount-rename">
                    <input value={value} onChange={handleChange} type="text" />
                    <button className="rename-btn" onClick={changeName}>Rename</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
import { useState } from "react"
import { Link } from "react-router-dom"
import firebase from "firebase";

import "./LogIn.css"

function LogIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePass = (e) => setPassword(e.target.value);

    const handleLogIn = async () => {
        setError(false)
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('log in success !');
        }catch(error){
            setError(true);
        }
    }

    return(
        <div className="log-in-page">
            <h2>Вход</h2>
            {error && <div className="error-message">Неверный логин или пароль</div>}
            <label>Email</label>
            <input type="email" onChange={handleEmail}/>
            <label>Пароль</label>
            <input type="password" onChange={handlePass} />
            <button className="log-in-btn" onClick={handleLogIn}>Войти</button>
            <br />
            Еще не зарегистрированы ? <Link to="/registration">Регистрация</Link>
        </div>
    )
}

export default LogIn
import { useState } from "react"
import { Link } from "react-router-dom"
import firebase from "firebase";

import "./Registration.css"

function Registration(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePass = (e) => setPassword(e.target.value)

    const handleRegistration = async () => {
        console.log(email, password);
        setError(false);
        try{
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log("auth success !");
        }catch(error){
            setError(true);
            console.log(error);
        }
    }

    return(
        <div className="registration-page">
            <h2>Регистрация</h2>
            <label>Ваш Email</label>
            <input type="email" onChange={handleEmail} />
            <label>Придумайте пароль</label>
            <input type="password" onChange={handlePass} />
            <button className="reg-btn" onClick={handleRegistration}>Регистрация</button>
            <br />
            Уже зарегистрированы ? <Link to="/log-in">Войти</Link>
        </div>
    )
}

export default Registration
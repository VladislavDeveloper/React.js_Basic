import React from 'react';
import './App.css'
import Message from './components/Message';

import logo from './images/logo192.png';


const message = 'This is my first React experience'


function App(props){
    return(
        <div className='App'>
            <img className='logo' src={ logo } alt='logo' />
            <div className='App-header'>
               My First React App 
                <h3>Hello, {props.name}</h3>
            </div>
            <Message message={message} />
        </div>
    )
}

export default App;
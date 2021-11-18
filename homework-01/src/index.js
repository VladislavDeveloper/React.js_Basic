import React from 'react'
import reactDom from 'react-dom'
import App from './App'


const name = 'Vladislav'

reactDom.render(
    <React.StrictMode>
        <App name={name} />
    </React.StrictMode>,

    document.getElementById('root')
)
import React from 'react'

import ReactDom from 'react-dom'
 
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import './assets/app.scss'

//npm i react-icons
//to download the react-router-dom   type in cmd the  npm install react-router-dom
//to set up the router dom using BrowserRouter

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById('root'))
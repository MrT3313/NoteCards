// IMPORTS
import React from 'react'
import { Router } from "@reach/router"

// COMPONENTS
import HomePage from './HomePage.js'
// import Login from '../pages/Login.js'

const HomePage_Test = () => <p>HomePage_Test</p> 
const AppHome = () => <p>AppHome</p>

// MAIN COMPONENT TO EXPORT
const App = () => (
        <Router>
            {/* <HomePage_Test path='/app/HomePage'/> */}
            <HomePage path='/app/HomePage'/>
            <AppHome path='/app' />
            
        </Router>
)

// EXPORT
export default App
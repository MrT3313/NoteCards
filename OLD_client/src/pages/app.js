
// V1
// IMPORTS
import React from 'react'
import { Router } from "@reach/router"

// COMPONENTS
import HomePage from '../Views/HomePage.js.js'
import StudyPage from '../Views/StudyPage.js.js'
import TestPage from '../Views/TestPage.js.js'
import Login from '../Views/Login.js.js'

// const HomePage_Test = () => <p>HomePage_Test</p> 
// const AppHome = () => <p>AppHome</p>

// MAIN COMPONENT TO EXPORT
const App = () => (
        <Router>
            {/* <HomePage_Test path='/app/HomePage'/> */}
            <HomePage path='/app/HomePage'/>
            <StudyPage path='/app/StudyPage'/>
            <TestPage path='/app/TestPage'/>

            <Login path='/app/Login'/>
        </Router>
)

// EXPORT
export default App
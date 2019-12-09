// IMPORTS
import React from 'react'
import {Router} from '@reach/router'

// COMPONENTS
// import HomePage from '../'
// import StudyPage from '../'
// import TestPage from '../'
// import Login from '../'

// MAIN COMPONENT TO EXPORT
const APP_INDEX = () => {
    <Router>
        {/* <HomePage_Test path='/app/HomePage'/> */}
        <HomePage path='/app/HomePage'/>
        <StudyPage path='/app/StudyPage'/>
        <TestPage path='/app/TestPage'/>

        <Login path='/app/Login'/>
    </Router>
}
// IMPORTS
import React from 'react'
import {Router} from '@reach/router'

// COMPONENTS
import HomePage from '../app/views/HomePage.js'
import StudyPage from '../app/views/StudyPage.js'
import TestPage from '../app/views/TestPage.js'

// MAIN COMPONENT TO EXPORT
const APP_INDEX = () => {
    return (
        <Router>
            <HomePage path='/app'/>
            <StudyPage path='/app/StudyPage'/>
            <TestPage path='/app/TestPage'/>
        </Router>
    )
}

export default APP_INDEX
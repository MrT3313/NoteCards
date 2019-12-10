// IMPORTS
import React from 'react'
import {Router} from '@reach/router'

// COMPONENTS
import HomePage from './views/HomePage.js.js'
import StudyPage from './views/StudyPage.js.js'
import TestPage from './views/TestPage.js.js'

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
// IMPORTS
import React from 'react'

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import StudySidebar from '../components/StudySidebar.js'

// CSS

// MAIN COMPONENT TO EXPORT
const StudyPage = () => {
    return(
        <MainLayout>
            <StudySidebar />
            <div>Study Page</div>
        </MainLayout>
    )
}

// EXPORTS
export default StudyPage
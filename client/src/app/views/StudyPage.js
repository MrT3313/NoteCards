// IMPORTS
import React from 'react'

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import Sidebar from '../layouts/SidebarLayout.js'

// CSSS

// MAIN COMPONENT TO EXPORT
const StudyPage = () => {
    return(
        <MainLayout>
            {/* <StudySidebar /> */}
            <Sidebar type="Study"/>
            <div>Study Page</div>
        </MainLayout>
    )
}

// EXPORTS
export default StudyPage
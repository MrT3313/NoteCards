// IMPORTS
import React from 'react'

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js.js'

// COMPONENTS
import Sidebar from '../layouts/SidebarLayout.js.js'

// CSS 

// MAIN COMPONENT TO EXPORT
const TestPage = () => {
    return (
        <MainLayout>
            {/* <TestSidebar />  */}
            <Sidebar type='Test'/>
            <div>Test Page</div>
        </MainLayout>
    )
}

// EXPORTS
export default TestPage
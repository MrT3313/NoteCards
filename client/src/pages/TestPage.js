// IMPORTS
import React from 'react'

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import TestSidebar from '../components/TestSidebar.js'

// CSS 

// MAIN COMPONENT TO EXPORT
const TestPage = () => {
    return (
        <MainLayout>
            <TestSidebar /> 
            <div>Test Page</div>
        </MainLayout>
    )
}

// EXPORTS
export default TestPage
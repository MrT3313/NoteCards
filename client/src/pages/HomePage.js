// IMPORTS
import React from "react"

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import HomeSidebar from '../components/HomeSidebar.js'

// CSS

// MAIN COMPONENT TO EXPORT
const HomePage = () => {
    return (
        <MainLayout>
            <HomeSidebar />

            <div>
                HomePage
            </div>
            
        </MainLayout>

    )
}

// EXPORTS
export default HomePage
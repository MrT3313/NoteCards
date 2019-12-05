// IMPORTS
import React from 'react'

// COMPONENTS


// CSS
import MainLayout_STYLES from'../styles/mainLayout.module.css'

// MAIN COMPONENT TO EXPORT
const MainLayout = (props) => {
    return (
        <div className={MainLayout_STYLES.index}>
            <div className={MainLayout_STYLES.children}>
                {props.children}
            </div>
        </div>
    )
}

// EXPORTS
export default MainLayout

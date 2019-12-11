// IMPORTS
import React from 'react'

// COMPONENTS


// SCSS
import MainLayout_STYLES from '../../styles/mainLayout.module.scss'

// MAIN COMPONENT TO EXPORT
const MainLayout = (props) => {
    return (
        <div className={MainLayout_STYLES.index}>
            {props.children}
        </div>
    )
}

// EXPORTS
export default MainLayout

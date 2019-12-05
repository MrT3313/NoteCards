// IMPORTS
import React from 'react'

// COMPONENTS

// CSS
import SidebarLayout_STYLES from '../styles/SidebarLayout.module.css'

// MAIN COMPONENT TO EXPORT
const SidebarLayout = (props) => {
    return(
        <div className={SidebarLayout_STYLES.index}>
            <div>
                {props.children}
            </div>
            <div>Client Logo</div>
        </div>
    )
}

// EXPORTS
export default SidebarLayout 
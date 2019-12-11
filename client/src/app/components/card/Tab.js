// IMPORTS
import React from 'react'

// LAYOUTS

// COMPONENTS

// SCSS
import Tab_STYLES from '../../../styles/tab.module.scss'

// MAIN COMPONENT TO EXPORT
const Tab = (props) => {
    // - A - // Data & Variables
    console.log('TAB PROPS: ', props)
    const { tabTitle } = props
    
    // - B - // Return
    return (
        <div className={Tab_STYLES.index}>
            <div className={Tab_STYLES.text}>
                {tabTitle}
            </div>
            <div className={Tab_STYLES.line}></div>

        </div>
    )
}

// EXPORTS
export default Tab
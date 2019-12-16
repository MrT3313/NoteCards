// IMPORTS
import React from 'react'

// COMPONENTS

// SCSS
// import CardLayout_STYLES from './CardLayout.module.scss'
import CardLayout_STYLES from '../../styles/cardLayout.module.scss'

// MAIN COMPONENT TO EXPORT
const CardLayout = (props) => {
    return (
        <div className={CardLayout_STYLES.index}>
            {props.children}
        </div>
    )
}

// EXPORT
export default CardLayout
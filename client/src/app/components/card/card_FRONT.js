// IMPORTS
import React from 'react'

// LAYOUTS

// COMPONENTS
import Tab from './Tab.js'

// SCSS
import card_FRONT_STYLES from '../../../styles/cards.module.scss'

// MAIN COMPONENT TO EXPORT
const FRONT_card = (props) => {
    // - A - // Data & Variables
    console.log('FRONT_card PROPS: ', props)
    const { title, tabTitle } = props.item.node

    // - B - // Return
    return (
        <div className={card_FRONT_STYLES.index_FRONT}>
            <div className={card_FRONT_STYLES.title}>
                {title}
            </div>
            <div className={card_FRONT_STYLES.topLeft}></div>
            <div className={card_FRONT_STYLES.topRight}>
                
                {/* 
                    TODO: make sure unique tab data makes its way here
                    map and render all needed tabs 
                */}
                
                <Tab />
            </div>
            <div className={card_FRONT_STYLES.bottomRight}></div>
        </div>
    )
}

// EXPORTS
export default FRONT_card
// IMPORTS
import React from 'react'
import { documentToReactComponents } from '@Contentful/rich-text-react-renderer'

// LAYOUTS

// COMPONENTS

// SCSS
import card_BACK_STYLES from '../../../styles/cards.module.scss'

// MAIN COMPONENT TO EXPORT
const BACK_card = (props) => {
    // - A - // Data & Variables
    console.log('BACK_card PROPS: ', props)
    const {item} = props

    // - B - // Return
    return (
        <div
            className={card_BACK_STYLES}
        >
            Back
            <div>
                {documentToReactComponents(item.node.mainDescription.json)}
            </div>
        </div>
    )
}

// EXPORTS
export default BACK_card
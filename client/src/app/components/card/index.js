// IMPORTS
import React, { useState } from 'react'

// LAYOUTS

// COMPONENTS
import CardLayout from '../../layouts/CardLayout.js'
import FRONT_card from './card_FRONT.js'
import BACK_card from './card_BACK'

// SCSS
import Card_STYLES from '../../../styles/cards.module.scss'


// MAIN COMPONENT TO EXPORT
const CARD_INDEX = () => {
    // - A - // Data & Variables
    const [cardSide, setCardSide ] = useState('FRONT')

    // - B - // Return
    const clickHandler = () => {
        console.log('BUTTON CLICKED')
        cardSide === "FRONT" ? setCardSide("BACK") : setCardSide("FRONT")
    }

    // - C - // Return
    return (
        <div className={Card_STYLES.index}
            onClick={clickHandler}
        >
            <CardLayout 
                // onClick={clickHandler}
            >
                {cardSide === "FRONT" ?
                    <FRONT_card />
                    :
                    <BACK_card />
                }
            </CardLayout>
        </div>
    )
}

// EXPORTS
export default CARD_INDEX
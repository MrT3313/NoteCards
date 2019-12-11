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
const CARD_INDEX = (props) => {
    // - A - // Data & Variables
    console.log('CARD INDEX props: ', props)
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
            <CardLayout>
                {cardSide === "FRONT" ?
                    <FRONT_card item={props.item}/>
                    :
                    <BACK_card item={props.item}/>
                }
            </CardLayout>
        </div>
    )
}

// EXPORTS
export default CARD_INDEX
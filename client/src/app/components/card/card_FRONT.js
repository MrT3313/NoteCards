// IMPORTS
import React, { useState, useEffect } from 'react'

// LAYOUTS

// COMPONENTS
import Tab from './Tab.js'

// SCSS
import card_FRONT_STYLES from '../../../styles/cards.module.scss'

// MAIN COMPONENT TO EXPORT
const FRONT_card = (props) => {
    // - A - // Data & Variables
    console.log('FRONT_card PROPS: ', props)
    const { item, uniqueSets } = props

    // - A.1 - // USE STATE HOOK
    const [filteredTabs, setFilteredTabs] = useState([])

    // - B - // USE EFFECT HOOK
    useEffect(() => {
        console.log("USE EFFECT")
        console.log(uniqueSets)

        const filterHelper = [
            [], // checkArray
            [], // fitleredArray
            [], // tab position
        ]

        uniqueSets.forEach( set => {
            console.log(set)

            if (set.node.title !== "Saltgrass Favorites") {
                if (set.node.title === "Entrees") {
                    set.node.position = 1
                }
                if (set.node.title === "Apps") {
                    set.node.position = 2
                }
                if (set.node.title === "Sides & Toppings") {
                    set.node.title = "S&T"
                    set.node.position = 3
                }   
                if (set.node.title === "Alcoholic" ||
                    set.node.title === "Drinks"
                ) {
                    set.node.title = "Drinks"
                    set.node.position = 4
                }   
                if (set.node.title === "Desserts") {
                    set.node.position = 5
                }

                if (filterHelper[0].length === 0) {
                    filterHelper[0].push(set.node.title)
                    filterHelper[1].push(set.node)
                } else if (!filterHelper[0].includes(set.node.title)) {
                    filterHelper[1].push(set.node)
                }
            }
        })

        console.log(filterHelper)
        setFilteredTabs(filterHelper[1])
    },[uniqueSets])

    console.log('FRONT_card FILTERED ARRAY', filteredTabs)

    // - B - // Return
    return (
        <div className={card_FRONT_STYLES.index_FRONT}>
            <div className={card_FRONT_STYLES.title}>
                {item.node.title}
            </div>
            <div className={card_FRONT_STYLES.topLeft}></div>
            <div className={card_FRONT_STYLES.topRight}>
                
                {/* 
                    TODO: make sure unique tab data makes its way here
                    map and render all needed tabs 
                */}
                
                {filteredTabs.map((set, key) => {
                    // console.log(set)
                    // console.log(set.node.title)

                    try {

                    } catch {
                        console.log('ERROR')
                    }

                    return <Tab tabTitle={set.title}/>
                })}
            </div>
            <div className={card_FRONT_STYLES.bottomRight}></div>
        </div>
    )
}

// EXPORTS
export default FRONT_card
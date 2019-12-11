// IMPORTS
import React from "react"
import {graphql, useStaticQuery } from "gatsby"

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import Sidebar from '../layouts/SidebarLayout.js'
import StudySetOption from '../components/StudySetOption.js'

// SCSS
import HomePage_STYLES from '../../styles/homePage.module.scss'

// MAIN COMPONENT TO EXPORT
const HomePage = () => {
    // - A - // Data & Variables
    const data = useStaticQuery(query)
    const uniqueArray = []

    // - B - // Return
    return (
        <MainLayout>
            <Sidebar type="Home"/> 
            <div className={HomePage_STYLES.index}>
                {/* // - B.1 - // Make Unique Array */}
                {data.allContentfulCard.edges.forEach((element, key) => {
                    element.node.studySets.forEach((item, key) => {
                        if(!uniqueArray.includes(item)) {
                            uniqueArray.push(item)
                        }
                    })    
                })}
                
                {/* // - B.2 - //  Map over and render individual studySets  */}
                {uniqueArray.map((set, key) => {
                    return <StudySetOption item={set}/>
                })}
            </div>
        </MainLayout>
    )
}

// - A.1 - // Component GraphQL Query
const query = graphql`
    query {
        allContentfulCard {
            edges {
                node {
                    studySets
                }
            }
        },
    }
`

// EXPORTS
export default HomePage
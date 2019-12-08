// IMPORTS
import React, {Component} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js.js'

// COMPONENTS
import Sidebar from '../layouts/SidebarLayout.js.js'


import StudySetOption from '../components/StudySetOption.js.js'

// CSS
import HomePage_STYLES from '../styles/homePage.module.css'

// MAIN COMPONENT TO EXPORT

// - V1 - // Functional Components (what is comes with)
const HomePage = () => {
    const data = useStaticQuery(query)
    const uniqueArray = []

    return (
        <MainLayout>
            {/* <HomeSidebar /> */}
            <Sidebar type="Home"/> 
                <div className={HomePage_STYLES.index}>
                    {/* Make Unique Array */}
                    {data.allContentfulCard.edges.forEach((element, key) => {
                        element.node.studySets.forEach((item, key) => {
                            if(!uniqueArray.includes(item)) {
                                uniqueArray.push(item)
                            }
                        })    
                    })}
                    {/* {console.log(uniqueArray)} */}
                    {/* Map over and render individual studySets  */}
                    {uniqueArray.map((set, key) => {
                        return <StudySetOption item={set}/>
                    })}
                </div>
        </MainLayout>
    )
}

// Component GraphQL Query
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
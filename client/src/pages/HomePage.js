// IMPORTS
import React, {Component} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import Sidebar from '../layouts/SidebarLayout.js'


import StudySetOption from '../components/StudySetOption.js'

// CSS
import HomePage_STYLES from '../styles/homePage.module.css'

// MAIN COMPONENT TO EXPORT

// - V1 - // Functional Components (what is comes with)
const HomePage = () => {
    const data = useStaticQuery(query)

    return (
        <MainLayout>
            {/* <HomeSidebar /> */}
            <Sidebar type="Home"/> 
                <div className={HomePage_STYLES.index}>
                    {data.allContentfulCard.edges.map((element, key) => {
                        return element.node.studySets.map((item, key) => {
                            return <StudySetOption item={item}/>
                        })
                        
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
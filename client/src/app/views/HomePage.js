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

    console.log('HomePage Data:', data)
    // - B - // Return
    return (
        <MainLayout>
            <Sidebar type="Home"/> 
            <div className={HomePage_STYLES.index}>
                {data.allContentfulStudySet.edges.forEach( edge => {
                    // console.log(edge)
                    
                    if(!uniqueArray.includes(edge.node.title)) {
                        uniqueArray.push(edge)
                    }  
                })}
                {uniqueArray.map((set, key) => {
                    return <StudySetOption uniqueSets={uniqueArray} set={set} allData={data.allContentfulCard.edges}/>
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
                    title
                    mainDescription {
                        json
                    }
                    tabTitle
                    studySets
                    locationIDs
                }
            }
        }
        allContentfulStudySet {
            edges {
                node {  
                    title
                    description
                }
            }
        }
    }`

// EXPORTS
export default HomePage
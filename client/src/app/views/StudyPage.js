// IMPORTS
import React, {useState, useEffect} from 'react'

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import Sidebar from '../layouts/SidebarLayout.js'
import { useStaticQuery } from 'gatsby'

// CSSS
import StudyPage_STYLES from '../../styles/studyPage.module.scss'

// MAIN COMPONENT TO EXPORT
const StudyPage = (props) => {
    // - A - // Data & Variables
    const data = useStaticQuery(query)
    const [filtered, setFiltered] = useState([])
    const category = props.location.state.props.item

    useEffect(() => {
        console.log("USE EFFECT")

        let filteredArray = []

        data.allContentfulCard.edges.forEach( edge => {
            console.log(edge.node)
            edge.node.studySets.forEach( set => {
                console.log(set)
                if (set === category) {
                    filteredArray.push(edge)
                }
            })
        })
        setFiltered(filteredArray)
    }, [data.allContentfulCard.edges, category])

    console.log('APP STATE FILTERED ARRAY',filtered)

    // - B - // Return
    return(
        <MainLayout>
            {/* <StudySidebar /> */}
            <Sidebar type="Study"/>
            <div className={StudyPage_STYLES.index}>
                <div>Study Page</div>
                <div>{props.location.state.props.item}</div>
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
                    tabTitle
                    studySets
                }
            }
        }
    }`

// EXPORTS
export default StudyPage
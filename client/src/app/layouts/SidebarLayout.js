/// IMPORTS
import React from 'react'
import { Link, useStaticQuery } from "gatsby"

// Auth0
import { logout } from '../../utils/auth.js'

// COMPONENTS

// SCSS
// import SidebarLayout_STYLES from './SidebarLayout.module.scss'
import SidebarLayout_STYLES from '../../styles/sidebarLayout.module.scss'

// MAIN COMPONENT TO EXPORT
const SidebarLayout = (props) => {
    // - A - // Data & Variables
    const data = useStaticQuery(query)

    // - B - // Return
    // console.log(props)
    // const {type} = props.type
    // console.log(type)
    return(
        <div className={SidebarLayout_STYLES.index}>            

            {/* V2 */}
            {props.type === 'Home' && 
                <div className={SidebarLayout_STYLES.homeSidebar}>
                    <div className={SidebarLayout_STYLES.sidebarContent}>
                        <h4>Welcome</h4>
                        {/* <div>{data.site.siteMetadata.author}</div> */}
                        <h4>
                            {(data.site.siteMetadata.author).split(' ')[0]}
                        </h4>
                    </div>
                    <div className={SidebarLayout_STYLES.menu}>
                        <ul>
                            <li><h5><Link to="/app/StudyPage/">Study</Link></h5></li>
                            <li><h5><Link to="/app/TestPage/">Test</Link></h5></li>
                            <li><h5><a
                                href="#logout"
                                onClick={e => {
                                    logout()
                                    e.preventDefault()
                                }}
                            >
                                Log Out
                            </a></h5></li>
                        </ul>
                    </div>
                </div>
            }
            {props.type === 'Study' && 
                <div className={SidebarLayout_STYLES.studySidebar}>
                    <div className={SidebarLayout_STYLES.sidebarContent}>
                        <h5>Active Set</h5>
                        <h5>Progress</h5>
                    </div>
                    <div className={SidebarLayout_STYLES.menu}>
                        <ul>
                            <li><h5><Link to="/app/">Exit to Home</Link></h5></li>
                        </ul>
                    </div>
                </div>
            }
            {props.type === 'Test' && 
                <div className={SidebarLayout_STYLES.testSidebar}>
                    <div className={SidebarLayout_STYLES.sidebarContent}>
                        <h5>Active Set</h5>
                        <h5>Progress</h5>
                        <h5>Time</h5>
                    </div>
                    <div className={SidebarLayout_STYLES.menu}>
                        <ul>
                            <li><h5><Link to="/app/HomePage/">Exit to Home</Link></h5></li>
                        </ul>
                    </div>
                </div>
            }
            <div className={SidebarLayout_STYLES.clientLogo}>
                Client Logo
            </div>
        </div>
    )
}

// - A.1 - // Component GraphQL Query
const query = graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }`

// EXPORTS
export default SidebarLayout 
/// IMPORTS
import React from 'react'
import { Link, useStaticQuery } from "gatsby"

// Auth0
import { logout } from '../../utils/auth.js'

// COMPONENTS

// SCSS
import SidebarLayout_STYLES from '../../styles/SidebarLayout.module.scss'

// MAIN COMPONENT TO EXPORT
const SidebarLayout = (props) => {
    // - A - // Data & Variables
    const data = useStaticQuery(query)

    // - B - // Return
    console.log(props)
    // const {type} = props.type
    // console.log(type)
    return(
        <div className={SidebarLayout_STYLES.index}>            
            {/* V1 */}
            {/* {props.children}             */}

            {/* V2 */}
            {props.type === 'Home' && 
                <div className={SidebarLayout_STYLES.homeSidebar}>
                    <div className={SidebarLayout_STYLES.sidebarContent}>
                        <div>Welcome</div>
                        {/* <div>{data.site.siteMetadata.author}</div> */}
                        <div>{
                            (data.site.siteMetadata.author).split(' ')[0]
                        }</div>
                    </div>
                    <div className={SidebarLayout_STYLES.menu}>
                        <ul>
                            <li><Link to="/app/StudyPage/">Study</Link></li>
                            <li><Link to="/app/TestPage/">Test</Link></li>
                            <li><a
                                href="#logout"
                                onClick={e => {
                                    logout()
                                    e.preventDefault()
                                }}
                            >
                                Log Out
                            </a></li>
                        </ul>
                    </div>
                </div>
            }
            {props.type === 'Study' && 
                <div className={SidebarLayout_STYLES.studySidebar}>
                    <div className={SidebarLayout_STYLES.sidebarContent}>
                        <div>Active Set</div>
                        <div>Progress</div>
                    </div>
                    <div className={SidebarLayout_STYLES.menu}>
                        <ul>
                            <li><Link to="/app/HomePage/">Exit to Home</Link></li>
                        </ul>
                    </div>
                </div>
            }
            {props.type === 'Test' && 
                <div className={SidebarLayout_STYLES.testSidebar}>
                    <div className={SidebarLayout_STYLES.sidebarContent}>
                        <div>Active Set</div>
                        <div>Progress</div>
                        <div>Time</div>
                    </div>
                    <div className={SidebarLayout_STYLES.menu}>
                        <ul>
                            <li><Link to="/app/HomePage/">Exit to Home</Link></li>
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
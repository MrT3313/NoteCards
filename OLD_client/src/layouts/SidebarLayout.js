// IMPORTS
import React from 'react'
import { Link } from "gatsby"

// COMPONENTS

// CSS
import SidebarLayout_STYLES from '../styles/SidebarLayout.module.css'

// MAIN COMPONENT TO EXPORT
const SidebarLayout = (props) => {
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
                        <div>ADD USERNAME</div>
                    </div>
                    <div className={SidebarLayout_STYLES.menu}>
                        <ul>
                            <li><Link to="/StudyPage/">Study</Link></li>
                            <li><Link to="/TestPage/">Test</Link></li>
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
                            <li><Link to="/HomePage/">Exit to Home</Link></li>
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
                            <li><Link to="/HomePage/">Exit to Home</Link></li>
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

// EXPORTS
export default SidebarLayout 
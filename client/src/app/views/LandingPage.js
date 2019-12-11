// IMPORTS
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// LAYOUTS

// COMPONENTS

// SCSS
import LandingPage_STYLES from '../../styles/landingPage.module.scss'

// MAIN COMPONENT TO EXPORT
const LandingPage = () => {
    // - A - // Data & Variables
    const data = useStaticQuery(query)

    // - B - // Return
    return (
        <div className={LandingPage_STYLES.index}>
            {/* // - B.1 - // Client Logo */}
            <div className={LandingPage_STYLES.client_LOGO}></div>

            {/* // - B.2 - // Welcome Content */}
            <div className={LandingPage_STYLES.welcomeContent}>
                <h2>
                    {`${data.site.siteMetadata.subTitle}`}
                </h2>
            </div>
            {/* // - B.3 - // User Action */}
            <div className={LandingPage_STYLES.userAction}>
                {/* // - B.3.a - // Location Selection */}
                <select className={LandingPage_STYLES.select}>
                    <option value="default">Please Select Location</option>
                    <option value="option_1">Salt Grass(1)</option>
                    <option value="option_2">Salt Grass(2)</option>
                    <option value="option_3">Italian Resturant</option>
                    <option value="option_4">Other Resturant</option>
                </select>
                {/* // - B.3.b - // Go To App */}
                <Link to="/app">Log In / Sign Up</Link>
            </div>
        </div >
    )
}

// - A.1 - // Component GraphQL Query
const query = graphql`
    query {
        site {
            siteMetadata {
                title
                subTitle
            }
        }
    }`

// EXPORTS
export default LandingPage
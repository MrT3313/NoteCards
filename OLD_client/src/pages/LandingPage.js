// IMPORT 
import React, { Component } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// LAYOUTS

// COMPONENTS

// CSS
import LandingPage_STYLES from '../styles/landingPage.module.css'

// MAIN COMPONENT TO EXPORT
const LandingPage = () => {

    // -1- // Get Company info from Contentful
    const data = useStaticQuery(graphql`
        query {
            contentfulCompanyInfo {
                companyName
                appSubTitle
            },
            allContentfulCard {
                edges {
                    node {
                        studySets
                    }
                }
            },
        }
    `)
    console.log(data)

    // -2- // Prepare JSX to be rendered
    return (
        <div
            // id="LandingPage"
            className={LandingPage_STYLES.LandingPage_CONTAINER}
        >
            <div
                className={LandingPage_STYLES.client_LOGO}
            ></div>
            <h3>
                {data.contentfulCompanyInfo.appSubTitle}
            </h3>

            <h2>Pick Location</h2>

            {/* <button>Sign In / Sign Up</button> */}
            {/* <Link to="/AuthPage/">Sign In / Sign Up</Link> */}
            <Link to="/app/HomePage/">Sign In / Sign Up</Link>

            <div>FOR DEV: </div> 
            <Link to="/HomePage/">Home Page</Link>
        </div>
        
    )
}

// EXPORTS
export default LandingPage
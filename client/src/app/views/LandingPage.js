// IMPORTS
import React, {Component} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// LAYOUTS

// COMPONENTS

// SCSS

// MAIN COMPONENT TO EXPORT
const LandingPage = () => {
    return (
        <>
            <div>Landing Page</div>
            <Link to="/app">Log In / Sign Up</Link>
        </>
    )
}

// EXPORTS
export default LandingPage
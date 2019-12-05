// IMPORTS
import React from "react"
import { Link } from "gatsby"

// COMPONENTS


import Layout from "../components/layout"
import SEO from "../components/seo"

// CSS
import LandingPage_STYLES from '../styles/LandingPage.module.css'


// MAIN COMPONENT TO EXPORT
const LandingPage = () => (
        <div
            // id="LandingPage"
            className={LandingPage_STYLES.LandingPage_CONTAINER}
        >
            <div
                className={LandingPage_STYLES.client_LOGO}
            ></div>
            <h3>The Proving Ground</h3>

            <h2>Pick Location</h2>

            {/* <button>Sign In / Sign Up</button> */}
            <Link to="/AuthPage/">Sign In / Sign Up</Link>
        </div>
)

// EXPORTS
export default LandingPage

// --- *** --- *** --- *** --- *** --- *** --- *** //
// --- *** --- *** --- *** --- *** --- *** --- *** //
// --- *** --- *** --- *** --- *** --- *** --- *** //

// // IMPORTS
// import React from "react"
// import { Link } from "gatsby"

// // SEO
// import SEO from "../components/seo"

// // COMPONENTS
// import Layout from "../components/layout"
// import Image from "../components/image"

// // MAIN COMPONENT TO EXPORT
// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />

//     {/* Main Container */}
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>

//     {/* Links */}
//     {/* <Link to="/page-2/">Go to page 2</Link><br></br> */}
//     <Link to="/LandingPage/">Go to Landing Page</Link><br></br>
//   </Layout>
// )

// // EXPORT
// export default IndexPage

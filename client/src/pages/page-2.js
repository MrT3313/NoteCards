// IMPORTS
import React from "react"
import { Link } from "gatsby"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"

// MAIN COMPONENT TO EXPORT
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

// EXPORTS
export default SecondPage

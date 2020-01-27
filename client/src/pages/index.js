// INITIAL COMMIT - HOSTING

// IMPORTS
import React from "react"
import { useStaticQuery } from 'gatsby'

// COMPONENTS
import LandingPage from '../app/views/LandingPage.js'

// MAIN COMPONENT TO EXPORT
const GATSBY_INDEX = () => {
  // - A - // Data & Variables
  const data = useStaticQuery(query)
  console.log('MAIN APP DATA',data)

  // - B - // Return
  return (
    <div>
      <LandingPage 
        siteMetadata={data.site.siteMetadata}
      />
    </div>
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
    }
`

// EXPORT
export default GATSBY_INDEX

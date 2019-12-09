// IMPORTS
import React from 'react'

// COMPONENTS
import HomePage from '../app/views/HomePage.js'

// CSS 
// TODO: MOVE THIS TO CSS MODULE
const GATSBY_INDEX_STYLES = {
  border: '1px solid blue',
  padding: '10px'
}

// MAIN COMPONENT TO EXPORT
const GATSBY_INDEX = () => {
  return (
    <div style={GATSBY_INDEX_STYLES}>
      <div>This is the GATSBY INDEX</div>
      <HomePage />
    </div>
  )
}

// EXPORT
export default GATSBY_INDEX

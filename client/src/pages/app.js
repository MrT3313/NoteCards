// IMPORTS
import React from "react"

// Auth0
import { 
  login, 
  // logout, 
  isAuthenticated, 
  getProfile } from "../utils/auth.js"

// COMPONENTS
import APP_INDEX from '../app/index.js'

const App = () => {
  console.log('INSIDE app.js GATSBY PAGE')
  
  // -1- // if user NOT logged in
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      {/* <APP_INDEX path="/app" user={user} /> */}
      <APP_INDEX user={user} />
    </>
  )
}

export default App

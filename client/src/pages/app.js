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
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <APP_INDEX path="/app" user={user} />
    </>
  )
}

export default App

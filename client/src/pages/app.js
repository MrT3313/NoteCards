// IMPORTS
import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

// Auth0
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

// COMPONENTS
import APP_INDEX from '../app/index.js.js'

const App = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to="/app">Home</Link>{" "}
        {/* <Link to="/app/settings">Settings</Link>{" "}
        <Link to="/app/billing">Billing</Link>{" "} */}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <APP_INDEX path="/app" user={user} />
    </>
  )
}

export default App

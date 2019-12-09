// IMPORTS
import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

// Auth0
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

// COMPONENTS
// import HomePage from '../app/views/HomePage.js'

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

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
      <Router>
        <Home path="/app" user={user} />
        {/* <HomePage path="/app" user={user} /> */}

        
        {/* <Settings path="/app/settings" />
        <Billing path="/app/billing" /> */}
      </Router>
    </>
  )
}

export default App

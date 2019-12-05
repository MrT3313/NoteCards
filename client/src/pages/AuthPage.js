// IMPORTS
import React from "react"
import { Link } from "gatsby"

// SEO
import SEO from "../components/seo"

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import AuthBox from '../components/AuthBox.js'

// CSS
import AuthPage_STYLES from '../styles/auth.module.css'

// MAIN COMPONENT TO EXPORT
const AuthPage = () => {
    return (
        <MainLayout>
            <div className={AuthPage_STYLES.index}>
                <AuthBox />
            </div>
        </MainLayout>
    )
}

// EXPORTS
export default AuthPage
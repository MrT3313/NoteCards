// IMPORTS
import React from "react"
import { Link } from "gatsby"

// SEO
import SEO from "../components/seo"

// COMPONENTS

// CSS
import AuthPage_STYLES from '../styles/auth.module.css'

// MAIN COMPONENT TO EXPORT
const AuthPage = () => (
    <div 
        // id='AuthPage'
        className={AuthPage_STYLES.AuthPage}
    >
        <div>AUTH PAGE</div>
        <div className={AuthPage_STYLES.authBox}>
            <div className={AuthPage_STYLES.authTabs}>
                <div
                    className={AuthPage_STYLES.authTab}
                >Sign In</div>
                <div
                    className={AuthPage_STYLES.authTab}
                >Sign Up</div>
            </div>
            <div className={AuthPage_STYLES.authContent}>
                <div className={AuthPage_STYLES.authSubbox}>
                    <div >UserName:</div>
                    <div >Password:</div>
                </div>
                <div className={AuthPage_STYLES.authSubbox}>
                    <input
                        type='text'
                        
                    ></input>
                    <input
                        type='text'
                        
                    ></input>
                </div>
            </div>
            <div className={AuthPage_STYLES.authButton}>
                <button>
                    SUBMIT 
                </button>
            </div>
            
        </div>
    </div>
)

// EXPORTS
export default AuthPage
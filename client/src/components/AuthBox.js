// IMPORTS
import React from 'react'

// COMPONENTS

// CSS
import AuthPage_STYLES from '../styles/auth.module.css'

// MAIN COMPONENT TO EXPORT
const AuthBox = () => {
    return (
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
    )
}

// EXPORTS
export default AuthBox
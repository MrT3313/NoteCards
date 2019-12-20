// IMPORTS
import React from 'react'

// AUTH
import { useAuth0 } from '../../utils/react-auth0-spa.js'

// __MAIN__ COMPONENT TO EXPORT
const HomePage = () => {
    const { loading, user } = useAuth0()

    if (loading || !user) {
        return (
            <div>LOADING....</div>
        )
    }
    
    return (
        <div>HELLO FROM HOME PAGE</div>
    )
}

// EXPORT
export default HomePage
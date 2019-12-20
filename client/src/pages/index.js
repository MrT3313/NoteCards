// IMPORTS
import React from "react"
import { Link } from 'gatsby'

// AUTH
import { useAuth0 } from '../utils/react-auth0-spa.js'

// COMPONENTS


const GATSBY_INDEX_landingPage = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <>
            <div>Hello world!</div>

            {!isAuthenticated && (
                <button
                    onClick={() => loginWithRedirect({})}
                >Log In</button>
            )}
            {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}

        </>
    )
}

export default GATSBY_INDEX_landingPage









// OLD TEST BUTTONS


// // IMPORTS
// import React from "react";
// import { useAuth0 } from "../utils/react-auth0-spa.js";

// // __MAIN__
// const TEST_buttons = () => {
//     const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//     return (
//         <div>
//         {!isAuthenticated && (
//             <button onClick={() => loginWithRedirect({})}>Log in</button>
//         )}

//         {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
//         </div>
//     );
// };

// // EXPORTS
// export default TEST_buttons
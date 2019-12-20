// IMPORTS
import React, { useEffect } from 'react'
import { useAuth0 } from '../../utils/react-auth0-spa.js'

// __MAIN__
const PrivateRoute = ({component: Component, path, ...rest}) => {
    const {loading, isAuthenticated, loginWithRedirect} = useAuth0()

    useEffect(() => {
        if (loading || isAuthenticated) {
            return;
        }

        const fn = async () => {
            await loginWithRedirect({
                appState: { targetUrl: path }
            })
        }
        fn();
    }, [loading, isAuthenticated, loginWithRedirect, path])

    const render = props => isAuthenticated === true ? <Component {...props} /> : null;

    return <Component path={path} render={render} {...rest} />
}

export default PrivateRoute



// import React from "react"

// import { navigate } from "gatsby"

// import { useAuth0 } from "../../utils/react-auth0-spa.js";
// // import { isLoggedIn } from "../utils/auth"

// const PrivateRoute = ({ component: Component, location, ...rest }) => {
//     // if (!isLoggedIn() && location.pathname !== `/app/login`) {
//     if (!useAuth0.isAuthenticated && location.pathname !== `/app/login`) {
//         // If we’re not logged in, redirect to the home page.
//         navigate(`/app/login`)
//         return null
//     }

//     return <Component {...rest} />
// }

// export default PrivateRoute











// OTHER OPTION

// // REACT
// import React from "react";
// import { Route, Redirect, withRouter } from "react-router";

// // REDUX
// import { connect } from "react-redux";

// // -- *** -- START CODE -- *** -- //
// // -- *** -- START CODE -- *** -- //

// const PrivateRoute = ({ component: Component, token, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         token ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

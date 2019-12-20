import React from 'react'

import { Auth0Provider } from "./src/utils/react-auth0-spa.js";
import config from "./src/utils/auth0_config.json";
import history from "./src/utils/history.js";

// A function that routes the user to the right place after login
// Docs -- https://thinkster.io/tutorials/auth0-react-login-and-user-profile/wrap-app-in-auth0provider
const onRedirectCallback = appState => {
    
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
            // : 'http://localhost:8000/app'
            // : window.location.href
    )
    // history.push(
    //     appState && appState.targetUrl
    //         ? appState.targetUrl
    //         : window.location.pathname
    // );
};

export const wrapRootElement = ({ element }) => {
    return (
        <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {element}
        </Auth0Provider>
    )
}
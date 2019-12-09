https://manage.auth0.com/dashboard/us/note-cards/applications/yMGJXAwzvUGpsqOxtmvz00WOrN3njeYg/quickstart

1. Gatsby Hello World Starter
2. npm install react-router-dom @auth0/auth0-spa-js
3. history instance
    - mkdir utils
        - touch history.js
            ```
                import { createBrowserHistory } from "history";
                export default createBrowserHistory();
            ```
4. react-auth0-spa.js
    - src/
        - touch react-auth0-spa.js
5. button holder component
    - src/
        - mkdir components
            -touch Auth0_buttons 
6. auth config
    - src/
        -touch auth_config.json

7. Wrap root element??
    - gatsby-config.js
        - use wrapRootElement


New Attempt

# Steps

## Auth0 - Docs: 
- Following: Quick Start for React SPA
- URL: https://auth0.com/docs/quickstart/spa/react
--- 

## Auth0 - Application:
- URL: manage.auth0.com/dashboard/us/note-cards/applications/yMGJXAwzvUGpsqOxtmvz00WOrN3njeYg
---
    - Domain: [x]
    - ClientID: [x]
    - Allowed Callback URL's: http://localhost:8000/callback
    - Allowed Web Origins: http://localhost:8000
    - Allowed Logout URLs: http://localhost:8000
    - Allowed Origins (CORS): http://localhost:8000

##  Gatsby - Sample Application
- [Auth Branch Commit History: Basic Rendering w/ 'src > pages' & 'src > app' setup](https://github.com/MrT3313/NoteCards/tree/b33afff52e1581286563300ed59dc5fc63868735/client)

## Auth0 - Dependencies
- react-router-dom
- @auth0/auth0-spa-js

## Auth0 & Gatsby - History Instance
- Qs:
    - Is this needed with gatsby's use of @reach/router
---
```js
<!-- src/utils/history.js -->

import { createBrowserHistory } from "history";
export default createBrowserHistory();
```

## Auth0 - Install Auth0 React Wrapper
- URL: This is the file from https://auth0.com/docs/quickstart/spa/react
---
```js
<!-- src/react-auth0-spa.js -->
import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes("code=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
```

## Auth0 - Log in & Logout Buttons
- notes:
    - functionality imported from '../react-auth0-spa.js'
--- 
```js
<!-- src/components/NavBar.js -->

import React from "react";
import { useAuth0 } from "../react-auth0-spa.js";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;
```

## Auth0 & Gatsby - Integrate Auth0 SDK
- Notes:
    - ** This is the file from the Auth0 quick start docs NOT what i actually implemented
    - i think this is where i am going ary
    - look into `wrapRootElement` in `browser-config.js`
    
---
```js
<!-- src/index.js -->

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
```

## Auth0 - auth_config.json
```json
    "domain": "YOUR_DOMAIN",
    "clientId"; "YOUR_CLIENT_ID"
```

## Auth0 & Gatsby

---
```js
<!-- src/App.js -->

import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
```
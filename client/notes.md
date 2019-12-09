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

## Auth0 - History Instance
- Qs:
    - Is this needed with gatsby's use of @reach/router
---
```js
// src/utils/history.js

import { createBrowserHistory } from "history";
export default createBrowserHistory();
```

## Auth0 - Install Auth0 Wrapper
- Notes
    - I think this is where im going ary
    - look into `wrapRootElement` in the `gatsby-browser.js`
---
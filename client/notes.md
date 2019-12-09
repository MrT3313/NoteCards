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

# Auth0
- Following: Quick Start for React SPA
- URL: https://auth0.com/docs/quickstart/spa/react
--- 

- Application: manage.auth0.com/dashboard/us/note-cards/applications/yMGJXAwzvUGpsqOxtmvz00WOrN3njeYg

    - Domain: [x]
    - ClientID: [x]
    - Allowed Callback URL's: http://localhost:8000/callback
    - Allowed Web Origins: http://localhost:8000
    - Allowed Logout URLs: http://localhost:8000
    - Allowed Origins (CORS): http://localhost:8000





# Gatsby 

    - gatsby-browser 

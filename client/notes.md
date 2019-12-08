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

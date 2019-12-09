/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

/* GATSBY - wrapRootElement
- Title: Redux Example
- URL: https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
```
const React = require("react")
const { Provider } = require("react-redux")

const createStore = require("./src/state/createStore")
const store = createStore()

exports.wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}
```
*/

/* ACTUAL ATTEMPT 

*/



import  {Auth0Provider} from "./react-auth0-spa.js";
// import config from "./src/utils/auth_config.json";
// import history from "./src/utils/history.js";

// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.pathname
//   );
// };

exports.wrapRootElement = ({ element }) => {
  return (
    <div>
      {element}
    </div>
  )
}

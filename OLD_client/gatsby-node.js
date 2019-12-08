/* - MAIN - 
    - Links -
        - https://www.gatsbyjs.org/docs/node-apis/
    - Docs -
        - implement Gatsby’s Node.js APIs to customize and extend default settings affecting the build process
    - Notes -
        - Creates Pages Dynamically
*/

// - 1 - //
/* - Links -
    Video Link: https://www.youtube.com/watch?list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx&v=j-vuF2PYHmU&feature=emb_title
*/
/* - Docs - 
    Implement the Gatsby API “onCreatePage”. This is
    called after every page is created.
*/
/* - Notes -
    setting up dynamic routes off of /app/... path
*/
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*"
        // Update the page.
        createPage(page)
    }
}


// - 2 - //
/* - Links -
    VideoLink: https://youtu.be/j-vuF2PYHmU?list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx&t=1246
*/
/* - Notes -
    Prevents Auth0 from doing something sometime...
*/
exports.onCreateWebpackConfig = ({ stage, loaders, actions}) => {
    if (stage === 'build-html') {
        actions.setSetpackConfig({
            module: {
                rules: {
                    test: /auth0-spa-js/,
                    use: loaders.null()
                }
            }
        })
    }
}
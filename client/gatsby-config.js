// DOTENV
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
console.log(process.env)

// EXPORTS
module.exports = {
  
  // - A - // METADATA
  siteMetadata: {
    title: `NoteCards`,
    subTitle: `The Proving Ground`,
    description: `Description`,
    author: `Reed Turgeon`,
  },

  // - B - // PLUGINS
  plugins: [

    // - 1 - // Contentful CMS Plugin
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // Learn about environment variables: https://gatsby.dev/env-vars

        spaceId: process.env.GATSBY_CONTENTFUL_spaceID,
        accessToken: process.env.GATSBY_CONTENTFUL_accessToken,
      },
    },

    // - 2 - // SASS Plugin
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          "client/src/styles"

          // - 3.1 - Layouts
          // "client/src/styles/cardLayout.module.scss",
          // "client/src/styles/mainLayout.module.scss",
          // "client/src/styles/sidebarLayout.module.scss",
          // // - 3.1 - Styles
          // "client/src/styles/_global.scss",
          // "client/src/styles/cards.module.scss",
          // "client/src/styles/homePage.module.scss",
          // "client/src/styles/landingPage.module.scss",
          // "client/src/styles/studyPage.module.scss",
          // "client/src/styles/studySetOption.module.scss",
          // "client/src/styles/tab.module.scss,"
        ],
      },
    },

    // - 3 - // Protecting HTML requests
    `gatsby-plugin-react-helmet`,

    // - 4 - // Using SVGs
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets\/.*\.svg$/,
        },
      },
    }
  ],
}

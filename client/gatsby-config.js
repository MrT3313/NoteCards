// configure options for a Gatsby site, with metadata for project title, description, plugins, etc.

// -- //

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  
  // METADATA
  siteMetadata: {
    // title: `Gatsby Default Starter`,
    title: `NoteCards`,
    subTitle: `The Proving Ground`,
    description: `Description`,
    author: `Reed Turgeon`,
  },

  // PLUGINS
  plugins: [
    // - 1 - // ACCESS: Markdown Data Plugin
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    // - 1.1 - // TRANSFORM: Markdown File into usefull html
    `gatsby-transformer-remark`,

    // - 2 - // Contentful CMS Plugin
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // Learn about environment variables: https://gatsby.dev/env-vars

        spaceId: process.env.GATSBY_CONTENTFUL_spaceID,
        accessToken: process.env.GATSBY_CONTENTFUL_accessToken,
      },
    },

    // - 3 - // SASS Plugin
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

    // - 4 - // Protecting HTML requests
    `gatsby-plugin-react-helmet`,

    // - 5 - // Using SVGs
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

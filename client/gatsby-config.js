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
    `gatsby-plugin-sass`,

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


    // Images
    // `gatsby-plugin-sharp`,
    // `gatsby-transformer-sharp`,

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

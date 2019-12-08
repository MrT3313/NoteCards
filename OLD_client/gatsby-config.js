// configure options for a Gatsby site, with metadata for project title, description, plugins, etc.

// -- //
require('dotenv').config()

console.log(process.env.CONTENTFUL_SPACE_ID)
console.log(process.env.CONTENTFUL_ACCESS_TOKEN)
module.exports = {
  siteMetadata: {
    // title: `Gatsby Default Starter`,
    title: `NoteCards`,
    subTitle: `The Proving Ground`,
    description: `Description`,
    author: `Reed Turgeon`,
  },
  plugins: [
    // ACCESS: Markdown Data Plugin
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },

    // TRANSFORM: Markdown File into usefull html
    `gatsby-transformer-remark`,

    // SASS Plugin
    `gatsby-plugin-sass`,

    // Images
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },


    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

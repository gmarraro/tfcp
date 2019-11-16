const path = require('path')

module.exports = {
  siteMetadata: {
    title: `The Fair Chance Project`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Gaby Marraro, Kaitlyn Gu`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-fair-chance-project`,
        short_name: `tfcp`,
        start_url: `/`,
        background_color: `#F5F0EB`,
        theme_color: `#F5F0EB`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options : {
        src: path.join(__dirname, `src`),
        fonts: path.join(__dirname, `src/fonts`),
        components: path.join(__dirname, `src/components`),
      }
    },
    'gatsby-plugin-resolve-src'
  ],
}

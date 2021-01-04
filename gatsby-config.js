// const dotenv = require("dotenv")

// if (process.env.NODE_ENV !== "production") {
//   dotenv.config()
// }

module.exports = {
  siteMetadata: {
    title: `Marketa Stankova`,
    description: `Portfolio and Blog Gatsby project bootstrapped with default Gatsby starter.`,
    author: `Marketa Stankova`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              // linkImagesToOriginal: true,
              // wrapperStyle: fluidResult =>
              //   `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marketa Stankova`,
        short_name: `Marketa Stankova`,
        start_url: `/`,
        background_color: `#ee5f5b`,
        theme_color: `#ee5f5b`,
        display: `minimal-ui`,
        icon: `src/images/mstanka.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

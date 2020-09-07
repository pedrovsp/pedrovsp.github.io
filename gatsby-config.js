module.exports = {
  siteMetadata: {
    title: `Pedro Vitorino Personal`,
    description: `Pedro Vitorino personal webpage`,
    author: `@pedrovsp`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ABC4E1`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ABC4E1`,
        theme_color: `#ABC4E1`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128579467-2",
        pageTransitionDelay: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      precachePages: [`/index/`],
    }
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Tek Loon',
    description: `Tek Loon's Blog for Javascript and Web Development`,
    author: 'Tek Loon',
    url: 'https://tekloon.dev',
    siteUrl: 'https://tekloon.dev',
    twitterUsername: `@TekLoonCheah`,
    image: 'https://tekloon.dev/images/tekloon.jpg',
    articleImage: 'https://tekloon.dev/images/article-stock-photo.jpeg',
    organization: {
      name: 'Tek Loon Blog',
      url: 'https://tekloon.dev',
      logo: 'https://tekloon.dev/icons/icon-512x512.png',
    },
    menuLinks: [
      {
        name: 'Blog',
        link: '/'
      },
      {
        name: 'Dev Tips',
        link: '/dev-tips'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
          {
            resolve: `gatsby-remark-embed-gist`,
          }
        ],
      },
    },
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TekLoon`,
        short_name: `TekLoon`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://dev.us10.list-manage.com/subscribe/post?u=72056c738adef81f863ffe503&amp;id=4f8d34c1e7',
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_TOKEN,
        databaseId: process.env.NOTION_DB_ID,
      },
    },
  ],

}

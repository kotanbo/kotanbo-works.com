/* eslint-disable @typescript-eslint/no-var-requires */
require(`dotenv`).config()

const siteMetadata = {
  title: `Gatsby Starter - Strata by HTML5 UP`,
  author: `Hunter Chang`,
  description: `A Gatsby.js Starter based on Strata by HTML5 UP`,
  user: {
    github: `kotanbo`,
    qiita: `kotanbo`,
  },
}
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/website-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: `
        query ($author: String = "", $userFirst: Int = 0) {
          user(login: $author) {
            repositories(first: $userFirst, orderBy: {field: UPDATED_AT, direction: DESC}) {
              edges {
                node {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }`,
        variables: {
          userFirst: 100,
          author: siteMetadata.user.github,
        },
      },
    },
    {
      resolve: `gatsby-source-qiita`,
      options: {
        accessToken: process.env.QIITA_API_TOKEN,
        userName: siteMetadata.user.qiita,
        fetchPrivate: false,
      },
    },
  ],
}

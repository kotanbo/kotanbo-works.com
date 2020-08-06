/* eslint-disable @typescript-eslint/no-var-requires */
require(`dotenv`).config()

const siteMetadata = {
  title: `KOTANBO WORKS`,
  description: `主に和歌山で活動しているフリーランスのエンジニアです。`,
  user: {
    name: `KOTANBO WORKS`,
    mail: `contact@kotanbo-works.com`,
    github: `kotanbo`,
    qiita: `kotanbo`,
  },
  gallery: {
    directory_name: `nomad`,
  },
}
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/website-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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

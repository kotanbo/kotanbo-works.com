import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

type Site = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      siteLanguage: string
    }
  }
}
type Avatar = {
  avatar: {
    publicURL: string
  }
}

const Head: React.FC<HelmetProps> = () => {
  const data = useStaticQuery<Site & Avatar>(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteLanguage
        }
      }
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        publicURL
      }
    }
  `)
  const { title, description, siteUrl, siteLanguage } = data.site.siteMetadata
  const avatarAbsoluteUrl = siteUrl + data.avatar.publicURL

  return (
    <Helmet title={title}>
      <html lang={siteLanguage} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={avatarAbsoluteUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={siteUrl}></meta>
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={avatarAbsoluteUrl} />
    </Helmet>
  )
}

export default Head

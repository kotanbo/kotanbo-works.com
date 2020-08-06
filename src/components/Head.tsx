import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { useSiteMetadata } from '../hooks'

type Avatar = {
  avatar: {
    publicURL: string
  }
}

const Head: React.FC<HelmetProps> = () => {
  const siteMetadata = useSiteMetadata()
  const data = useStaticQuery<Avatar>(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        publicURL
      }
    }
  `)
  const { title, description, siteUrl, siteLanguage } = siteMetadata
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
      <meta name="google-site-verification" content={siteMetadata.googleSiteVerification} data-react-helmet="true" />
    </Helmet>
  )
}

export default Head

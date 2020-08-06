import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

import Footer from './Footer'

type Site = {
  site: {
    siteMetadata: {
      user: {
        name: string
        mail: string
        github: string
      }
    }
  }
}
type Avatar = {
  avatar: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const Header: React.FC = () => {
  const data = useStaticQuery<Site & Avatar>(graphql`
    query {
      site {
        siteMetadata {
          user {
            name
            mail
            github
          }
        }
      }
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const user = data.site.siteMetadata.user

  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <Img fixed={data.avatar.childImageSharp.fixed} />
        </a>
        <h1>
          <strong>{user.name}</strong>
        </h1>
      </div>
      <Footer user={user} />
    </header>
  )
}

export default Header

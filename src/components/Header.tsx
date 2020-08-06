import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { useSiteMetadata } from '../hooks'

import Footer from './Footer'

type Avatar = {
  avatar: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const Header: React.FC = () => {
  const siteMetadata = useSiteMetadata()
  const user = siteMetadata.user
  const data = useStaticQuery<Avatar>(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
      <Footer />
    </header>
  )
}

export default Header

import React from 'react'
import '../assets/scss/main.scss'
import './layout.module.css'

import Head from './Head'
import Header from './Header'
import { useSiteMetadata } from '../hooks'

const Template: React.FC = ({ children }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <div style={{ backgroundColor: siteMetadata.backgroundColor }}>
      <Head />
      <Header />
      {children}
    </div>
  )
}

export default Template

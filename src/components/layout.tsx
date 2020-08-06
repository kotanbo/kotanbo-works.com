import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Template: React.FC = ({ children }) => (
  <div style={{ backgroundColor: `#283941` }}>
    <Header />
    {children}
  </div>
)

export default Template

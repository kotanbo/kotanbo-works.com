import React from 'react'
import { useSiteMetadata } from '../hooks'

const Footer: React.FC = () => {
  const siteMetadata = useSiteMetadata()
  const user = siteMetadata.user

  return (
    <div id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a href={`https://github.com/${user.github}`} className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href={`${user.contact}`} className="icon fa-envelope-o">
              <span className="label">Contact</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

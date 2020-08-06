import React from 'react'

type Props = {
  user: {
    name: string
    mail: string
    github: string
  }
}

const Footer: React.FC<Props> = ({ user }) => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href={`https://github.com/${user.github}`} className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href={`mailto:${user.mail}`} className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          &copy; {new Date().getFullYear()} {user.name}
        </li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer

import { Metadata } from 'next'
import Image from 'next/image'
import { siteMetadata } from './constants'
import '../public/scss/main.scss'
import '../public/css/styles.css'

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: 'website',
    siteName: siteMetadata.title,
    url: siteMetadata.siteUrl,
    images: [
      {
        url: siteMetadata.avatarAbsoluteUrl,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: siteMetadata.avatarAbsoluteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={siteMetadata.siteLanguage}>
      <body style={{ backgroundColor: siteMetadata.backgroundColor }}>
        <header id="header">
          <div className="inner">
            <a href="#" className="image avatar">
              <Image
                src={siteMetadata.avatarAbsoluteUrl}
                width={100}
                height={100}
                alt={siteMetadata.user.name}
              />
            </a>
            <h1>
              <strong>{siteMetadata.title}</strong>
            </h1>
          </div>
          <div id="footer">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a
                    href={`https://github.com/${siteMetadata.user.github}`}
                    className="icon fa-github"
                  >
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteMetadata.contactUrl}
                    className="icon fa-envelope-o"
                  >
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
        </header>
        {children}
      </body>
    </html>
  )
}

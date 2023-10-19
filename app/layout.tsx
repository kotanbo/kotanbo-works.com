import { Metadata } from 'next';
import Image from 'next/image';
import 'public/scss/main.scss';
import 'public/css/styles.css';
import { SITE_METADATA, SITE_OWNER } from 'constants/site';

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    type: 'website',
    siteName: SITE_METADATA.title,
    url: SITE_METADATA.url,
    images: [
      {
        url: SITE_METADATA.avatarUrl,
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: SITE_METADATA.avatarUrl
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ backgroundColor: '#283941' }}>
        <header id="header">
          <div className="inner">
            <a href="#" className="image avatar">
              <Image src={SITE_METADATA.avatarUrl} width={100} height={100} alt={SITE_OWNER.name} />
            </a>
            <h1>
              <strong>{SITE_METADATA.title}</strong>
            </h1>
          </div>
          <div id="footer">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a href={SITE_OWNER.githubUrl} className="icon fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href={SITE_OWNER.contactUrl} className="icon fa-envelope-o">
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
  );
}

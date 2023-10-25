import { Metadata } from 'next';
import Image from 'next/image';
import 'public/scss/main.scss';
import 'public/css/styles.css';
import { SITE_METADATA, SITE_OWNER } from 'constants/site';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PUBLIC_URL ?? 'http://localhost:3000'),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  openGraph: {
    type: 'website',
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.title
  },
  twitter: {
    card: 'summary',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ backgroundColor: '#283941' }}>
        <header id="header">
          <div className="inner">
            <a href="#" className="image avatar">
              <Image src={SITE_OWNER.avatarUrl} alt={SITE_OWNER.name} width={100} height={100} />
            </a>
            <h1>
              <strong>{SITE_OWNER.name}</strong>
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

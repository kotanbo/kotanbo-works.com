import { siteMetadata } from './constants'

export default function Home() {
  return (
    <div id="main">
      <section id="about">
        <h2>About {siteMetadata.user.name}</h2>
        <p>主に和歌山で活動しているフリーランスのエンジニアです。</p>
        <p>
          組み込み（携帯電話）、Web
          系・業務系システム、スマホアプリ（iOS、Android）開発に従事してきましたが、最近はバックエンド
          Laravel または ASP.NET、フロントエンド Vue.js 辺りを使って小規模 Web
          系システムの開発をやっていることが多いです。
        </p>
        <p>
          Web
          サービス、アプリを作ろうと思ったりする今日この頃ですが、機械学習に興味が湧き、数学の勉強をやり直しています。
        </p>
      </section>
    </div>
  )
}

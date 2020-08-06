import React from 'react'
import { graphql } from 'gatsby'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import GithubItems, { GithubRepositoryItem } from '../components/GithubItems'
import QiitaItems, { QiitaPostItem } from '../components/QiitaItems'

type User = {
  name: string
  github: string
  qiita: string
}

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        user: User
      }
    }
    githubData: {
      data: {
        user: {
          repositories: {
            edges: GithubRepositoryItem[]
          }
        }
      }
    }
    allQiitaPost: {
      edges: QiitaPostItem[]
    }
  }
}

const HomeIndex: React.FC<Props> = ({ data }) => {
  const { user } = data.site.siteMetadata
  const githubRepositoryItems = data.githubData.data.user.repositories.edges
  const qiitaPostItems = data.allQiitaPost.edges

  return (
    <Layout>
      <div id="main">
        <section id="about">
          <h2>About {user.name}</h2>
          <p>主に和歌山で活動しているフリーランスのエンジニアです。</p>
          <p>
            組み込み（携帯電話）、Web系・業務系システム、スマホアプリ（iOS、Android）開発に従事してきましたが、最近はバックエンド
            Laravel または ASP.NET、フロントエンド Vue.js
            辺りを使って小規模Web系システムの開発をやっていることが多いです。
          </p>
          <p>
            Webサービス、アプリを作ろうと思ったりする今日この頃ですが、機械学習に興味が湧き、数学の勉強をやり直しています。
          </p>
        </section>

        {githubRepositoryItems && githubRepositoryItems.length > 0 && (
          <GithubItems repositoryItems={githubRepositoryItems} userName={user.github} />
        )}
        {qiitaPostItems && qiitaPostItems.length > 0 && <QiitaItems postItems={qiitaPostItems} userName={user.qiita} />}

        <section id="gallery">
          <h2>Recent Nomad</h2>
          <Gallery />
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        user {
          name
          github
          qiita
        }
      }
    }
    githubData {
      data {
        user {
          repositories {
            edges {
              node {
                id
                name
                description
                url
              }
            }
          }
        }
      }
    }
    allQiitaPost {
      edges {
        node {
          id
          title
          url
        }
      }
    }
  }
`

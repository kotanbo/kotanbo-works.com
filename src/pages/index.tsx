import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import GithubItems, { GithubRepositoryItem } from '../components/GithubItems'
import QiitaItems, { QiitaPostItem } from '../components/QiitaItems'

type User = {
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
  const { title, description, user } = data.site.siteMetadata
  const githubRepositoryItems = data.githubData.data.user.repositories.edges
  const qiitaPostItems = data.allQiitaPost.edges

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Ipsum lorem dolor aliquam ante commodo
              <br />
              magna sed accumsan arcu neque.
            </h2>
          </header>
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac
            in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo
            blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque cubilia.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        {githubRepositoryItems && githubRepositoryItems.length > 0 && (
          <GithubItems repositoryItems={githubRepositoryItems} userName={user.github} />
        )}
        {qiitaPostItems && qiitaPostItems.length > 0 && <QiitaItems postItems={qiitaPostItems} userName={user.qiita} />}

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu
            lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="12u">
                    <textarea name="message" id="message" placeholder="Message" rows={4}></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">hello@untitled.tld</a>
                </li>
              </ul>
            </div>
          </div>
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

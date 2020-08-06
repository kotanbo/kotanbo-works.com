import { graphql, useStaticQuery } from 'gatsby'
import { DeepReadonly } from 'utility-types'

type Site = DeepReadonly<{
  site: {
    siteMetadata: SiteMetadata
  }
}>

type SiteMetadata = DeepReadonly<{
  title: string
  description: string
  siteUrl: string
  siteLanguage: string
  user: {
    name: string
    mail: string
    github: string
    qiita: string
  }
  gallery: {
    directoryName: string
  }
  backgroundColor: string
}>

const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<Site>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteLanguage
          user {
            name
            mail
            github
            qiita
          }
          gallery {
            directoryName
          }
          backgroundColor
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
